import ArrowUp from "/arrow-up.svg?url";

function ProjectBlock({ project, reverse = false }) {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-5 pt-20">

      {/* TEXT */}
      <div className={`col-span-2 row-span-3 ${reverse ? "order-3" : ""}`}>
        <h1>{project.name}</h1>

        <ul className="flex flex-wrap gap-3 pt-10 pb-5 text-sm">
          {project.tools?.map((tool, index) => (
            <li key={index} className="border px-3 py-1 rounded-3xl">
              {tool}
            </li>
          ))}
        </ul>

        <span>{project.description}</span>
        <div className="pt-5">
            <a href={project.link} target="_blank" className="h-5 w-fit text-black p-5 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-200" rel="noopener noreferrer"> View Project <span className="flex pl-2"><img src={ArrowUp} alt="Arrow Up" className="h-5 text-black"/></span></a>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={`col-span-3 row-span-2 ${reverse ? "order-2" : ""}`}>
        <img
          src={project.images.main}
          className="object-fill h-full rounded-xl"
          alt="project-img"
          loading="lazy"
        />
      </div>

      {/* SIDE IMAGE (TALL) */}
      <div className={`row-span-3 ${reverse ? "order-1" : ""}`}>
        <img
          src={project.images.side}
          className="object-fill h-full rounded-xl"
          alt="project-img"
          loading="lazy"
        />
      </div>

      {/* THIRD IMAGE (BOTTOM) */}
      <div className={`col-span-3 ${reverse ? "order-4" : ""}`}>
        <img
          src={project.images.extra}
          className="object-fill h-full rounded-xl"
          alt="project-img"
          loading="lazy"
        />
      </div>

    </div>
  );
}

export default ProjectBlock;