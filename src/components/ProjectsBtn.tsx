import { HiArrowRight } from "react-icons/hi2";
import { FC } from "react";

const ProjectsBtn: FC = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-black/20 rounded-full border border-white/10 group hover:bg-black/30 transition-all duration-300"
      >
        <img
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-4xl text-white group-hover:translate-x-2 transition-all duration-300"
          aria-hidden={true}
        />
      </a>
    </div>
  );
};

export default ProjectsBtn;
