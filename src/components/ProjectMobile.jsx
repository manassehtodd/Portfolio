import { ArrowUpRight } from "./Logo";

function ProjectMobile({ project }) {
  return (
    <div className="pt-10 md:hidden block">

      {/* Images */}
      <div className="grid grid-cols-2 gap-3">

        {/* Main Image */}
        <div className="col-span-2">
          <img
            src={project.images.main}
            className="w-full h-48 object-fit rounded-xl"
            alt="project-img"
            loading="lazy"
          />
        </div>

        {project.images.extra && (
        <div className="col-span-2">
            <img
                src={project.images.extra}
                className= "w-full h-32 object-fit rounded-xl"
                alt="project-img"
                loading="lazy"
            />
        </div>
        )}
      </div>

      {/* Text */}
      <div className="mt-5">
        <h1 className="text-xl font-semibold">{project.name}</h1>

        <ul className="flex flex-wrap gap-2 text-xs pt-4 pb-4">
          {project.tools?.map((tool, index) => (
            <li key={index} className="border px-2 py-1 rounded-2xl">
              {tool}
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-400">
          {project.description}
        </p>

        {/* Link */}
        <a href={project.link} target="_blank">
          <div className="flex items-center gap-3 mt-4">
            <div className="w-fit h-9 text-black p-3 bg-white rounded-full flex items-center justify-center">
              <span>View More</span><ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectMobile;