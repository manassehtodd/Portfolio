import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight, EmailIcon } from "./Logo";
import ProjectBlock from "./ProjectBlock";
import projectDetails from "./ProjectDetail";
import ProjectMobile from "./ProjectMobile";
function Project() {
    return(
        <section id="project" className="pt-30 p-5">
            <div className="flex w-full md:justify-center items-center">
                <h1 className="text-2xl font-semibold">.../Projects...</h1>
            </div>
            <div>
                <div className="md:hidden block">
                    {projectDetails.map((project, index) => (
                        <ProjectMobile key={index} project={project} />
                    ))}
                </div>
            </div>
            <div className="hidden md:block">
                <div>
                {projectDetails.map((project, index) => (
                    <ProjectBlock
                        key={index}
                        project={project}
                        reverse={index % 2 !== 0} // alternate layout
                    />
                ))}
</div>
            </div>
        </section>
    );
}

export default Project;