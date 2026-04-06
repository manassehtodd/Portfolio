import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight, EmailIcon } from "./Logo";
import FinovoSnap from "./../assets/images/Finovo-snap.png";
import FinovoSnap2 from "./../assets/images/Finovo-snap2.jpg";
import FinovoSnap3 from "./../assets/images/Finovo-snap3.jpg";
import LedgerlySnap from "./../assets/images/Ledgerly-snap1.png";
import LedgerlySnap2 from "./../assets/images/Ledgerly-snap2.png";
import LedgerlySnap3 from "./../assets/images/Ledgerly-snap.png";
import projectDetails from "./ProjectDetail";

import ProjectMobile from "./ProjectMobile";
function Project() {
    return(
        <section id="project" className="pt-30 p-5">
            <div className="flex w-full md:justify-center items-center">
                <h1 className="text-2xl font-semibold">.../Projects...</h1>
            </div>
            <div>
                {/* Frist project block */}
                <ProjectMobile />
                <div className="md:grid hidden grid-cols-6 grid-rows-3 gap-5 pt-5 ">
                    <div className="col-span-2 row-span-3 lg:h-100 lg:w-75 w-full">
                        <h1>{projectDetails[0].name}</h1>
                        <ul className="flex flex-row gap-3 flex-wrap text-sm pt-10 pb-10">
                            {projectDetails[0].toolUsed.map((tool, index) => (
                                <li
                                    key={index}
                                    className="border border-[#3d3d3d] px-3 py-1 rounded-3xl"
                                >
                                    {tool}
                                </li>
                                ))}
                        </ul>
                        <span>
                            {projectDetails[0].description}
                        </span>
                    </div>
                    <div className="col-span-3 row-span-2 w-full rounded-xl">
                        <img src={FinovoSnap} alt="Finovo-snapshot" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="row-span-3 w-full rounded-xl">
                        <img src={FinovoSnap3} alt="Finovo-snapshot" className="w-full h-full object-center rounded-xl" />
                    </div>
                    <div className="col-span-2 w-full rounded-xl">
                        <img src={FinovoSnap2} alt="Finovo-snapshot" className="w-full h-full object-center rounded-xl" />
                    </div>
                    <a href={projectDetails[0].Link} target="_blank" rel="noopener noreferrer"><div className=" flex flex-row items-center static">
                        <div className="border border-[#3d3d3d] w-10 rounded-full p-2.5">
                            <BrandGithub className="h-5 w-5" /> 
                        </div>
                        <div className="absolute right-109 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                        <ArrowUpRight className="h-5 w-5 cursor-pointer" />
                        </div>
                    </div></a>
                </div>

                {/* second project block */}
                <div className="grid grid-cols-6 grid-rows-3 gap-5 pt-30">
                    <div className="row-span-3 rounded-xl w-full">
                        <img src={LedgerlySnap3} alt="Ledgerly-snapshot" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="col-span-3 row-span-2 rounded-xl w-full">
                        <img src={LedgerlySnap} alt="Ledgerly-snapshot" className="w-full h-full object-cover rounded-xl" />
                    </div>
                                        <div className="col-span-2 row-span-3 h-100 w-75">
                        <h1>{projectDetails[1].name}</h1>
                                                <ul className="flex flex-row gap-3 flex-wrap text-sm pt-10 pb-2">
                            {projectDetails[1].toolUsed.map((tool, index) => (
                                <li
                                    key={index}
                                    className="border border-[#3d3d3d] px-3 py-1 rounded-3xl"
                                >
                                    {tool}
                                </li>
                                ))}
                        </ul>
                        <span>{projectDetails[1].description}</span>
                    </div>
                    <div className="col-span-2 w-full rounded-xl">
                        <img src={LedgerlySnap2} alt="Ledgerly-snapshot" className="w-full object-center rounded-xl" />
                    </div>
                    <a href={projectDetails[1].Link} target="_blank" rel="noopener noreferrer">
                        <div className=" flex flex-row items-center static">
                            <div className="border border-[#3d3d3d] w-10 rounded-full p-2.5"><BrandGithub className="h-5 w-5" /></div>
                            <div className="absolute right-172 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                                <ArrowUpRight className="h-5 w-5 cursor-pointer" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;