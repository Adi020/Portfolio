import { isMobile } from "react-device-detect";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <section
      className={`${
        isMobile ? "" : "fade-transition"
      } z-10 flex justify-center h-auto max-w-[1500px] backdrop-blur-[30px] flex-wrap bg-[#27262660] rounded-3xl py-8 min-[1500px]:w-[100%] gap-y-[60px] sm:gap-x-[4%]`}
    >
      {projects.map((project, index) => (
        <Project
          key={index}
          index={index}
          projects={projects}
          project={project}
        />
      ))}
    </section>
  );
};

export default ProjectList;
