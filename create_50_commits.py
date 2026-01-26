import os
import subprocess
import math

def run_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip()

cwd = r'c:\Users\Wak\OneDrive\Desktop\File\My_Portifolio'
os.chdir(cwd)

# Stage all files according to .gitignore
print("Staging all relevant files...")
run_command("git add .")

# Get list of staged files
print("Gathering staged files...")
staged_files_output = run_command("git ls-files --stage")
files = [line.split('\t')[1] for line in staged_files_output.splitlines()]

# Unstage everything for batching
run_command("git reset")

total_files = len(files)
print(f"Total files to commit: {total_files}")

if total_files == 0:
    print("No files found to commit!")
    exit(1)

num_commits = 50
batch_size = max(1, math.ceil(total_files / num_commits))

# Create commits
for i in range(num_commits):
    start = i * batch_size
    end = min((i + 1) * batch_size, total_files)
    
    if start >= total_files:
        print(f"Commit {i+1}/50: Creating final adjustment commit.")
        subprocess.run(f'git commit --allow-empty -m "Project Finalization - Part {i+1}/50"', shell=True)
        continue

    batch_files = files[start:end]
    print(f"Commit {i+1}/50: Adding {len(batch_files)} files.")
    
    for f in batch_files:
        subprocess.run(f'git add "{f}"', shell=True)
    
    subprocess.run(f'git commit -m "Project Construction - Part {i+1}/50"', shell=True)

print("Finished creating 50 commits.")
