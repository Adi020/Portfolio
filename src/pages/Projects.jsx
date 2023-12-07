import transition from "../components/Effects/Transition";
import "./style/Projects.css";
import ScrolleableSecction from "../components/Effects/ScrolleableSection";
import { handleCreateItem } from "../utils/createItem";
import projects from "../db/portfolio/proyectsToScroll.json";
import ProjectList from "../components/projects/ProjectList";

const Projects = () => {
  const items = handleCreateItem(projects);
  return (
    <section className="pb-[10%] flex flex-wrap justify-center mx-auto items-center max-[640px]:pt-[110px] pt-36 gap-16 max-w-[2000px]">
      <ScrolleableSecction items={items[0]} links={items[1]} />
      <div className="z-10 flex w-[100%] max-w-[1700px] sm:w-[80%] max-[1740px]:mr-[5%]  max-[640px]:pl-[5%] justify-start">
        <h3 className=" text-gray-400 text-6xl font-semibold pb-4 typing-animation max-[400px]:text-5xl max-[350px]:text-[43px] font-FontTitle">
          All projects
        </h3>
      </div>
      <ProjectList projects={projects} />
    </section>
  );
};

export default transition(Projects);
