import { useImageLoad } from "../../hooks/useImageLoad";
const Project = ({ index, projects, project }) => {
  const { imgRef, handleImageLoad } = useImageLoad();
  return (
    <article
      className={`relative flex port-box box-shadow overflow-hidden rounded-2xl min-h-[250px] max-[640px]:max-h-[300px] ${
        /*estilos de ultimo proyecto*/
        index === projects.length - 1 && index % 2 === 0
          ? "latest--project"
          : /*estilos invertidos cada 2 elementos y reiniciar cada 4 elementos*/
          Math.floor(index / 2) % 2 === 0
          ? index % 2 === 0
            ? "par--project"
            : "odd--project"
          : index % 2 === 0
          ? "odd--project"
          : "par--project"
      }`}
    >
      <div className="w-full h-full port-image">
        <img
          className="object-cover"
          src={project.src}
          onLoad={handleImageLoad}
          ref={imgRef}
          alt={project.title}
        />
      </div>

      <div className="absolute flex flex-col text-center justify-center port-content h-[100%] w-[100%] background">
        <p className=" text-slate-300 text-2xl pb-3 font-bold">
          {project.title}
        </p>

        <p className="text-slate-300 pb-3 font-medium">
          <span className=" text-blue-400 font-semibold">
            technologies used:
          </span>
          {project.technologies}
        </p>

        <div className="flex justify-evenly items-center">
          <div className="flex justify-around items-center flex-col">
            <a
              className="text-4xl"
              href={project.repository}
              target="_blank"
              title="link to repository"
            >
              <i className="bx bxl-github icon-git duration-500 hover:rounded-full"></i>
            </a>

            <a
              className=" text-xl font-bold text-blue-300 hover:text-blue-400"
              href={project.repository}
              target="_blank"
              title="link to repository"
            >
              Repository
            </a>
          </div>

          <div className="flex justify-center items-center flex-col">
            <a
              className="text-4xl"
              href={project.link}
              target="_blank"
              title="link to website"
            >
              <i className="bx bxl-netlify icon duration-500 hover:rounded-full"></i>
            </a>
            <a
              className=" text-xl font-bold text-blue-300 hover:text-blue-400"
              href={project.link}
              target="_blank"
              title="link to website"
            >
              WebSite
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
