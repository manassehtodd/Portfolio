import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight } from "./Logo";
function Project() {
    return(
        <section id="project" className="pt-30 p-5">
            <div className="flex w-full justify-center items-center">
                <h1 className="text-2xl font-semibold">.../Projects...</h1>
            </div>
            <div>
                {/* Frist project block */}
                <div className="grid grid-cols-6 grid-rows-3 gap-5">
                    <div className="col-span-2 row-span-3 h-100 w-75">
                        <h1>Gostat</h1>
                        <ul className="flex flex-row gap-3 flex-wrap text-sm pt-10 pb-10">
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Goland</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">TypeScript</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Gin</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">NextJS</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">PostgrSQL</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Redis</li>
                        </ul>
                        <span>
                            Gostat - a cutting-egde microservice-based application designed to handle
                            HTTP requests authentication and staticstics with finance.
                        </span>
                    </div>
                    <div className="col-span-3 row-span-2 w-full bg-white rounded-xl"></div>
                    <div className="row-span-3 w-full bg-green-600 rounded-xl"></div>
                    <div className="col-span-2 w-full bg-amber-500 rounded-xl"></div>
                    <div className=" flex flex-row items-center static">
                        <div className="border border-[#3d3d3d] w-10 rounded-full p-2.5"><BrandGithub className="h-5 w-5" /></div>
                    <div className="absolute right-109 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                        <ArrowUpRight className="h-5 w-5 cursor-pointer" />
                    </div>
                </div>
                </div>

                {/* second project block */}
                <div className="grid grid-cols-6 grid-rows-3 gap-5 pt-100">
                    <div className="bg-green-600 row-span-3 rounded-xl w-full"></div>
                    <div className="bg-white col-span-3 row-span-2 rounded-xl w-full"></div>
                                        <div className="col-span-2 row-span-3 h-100 w-75">
                        <h1>Gostat</h1>
                        <ul className="flex flex-row gap-3 flex-wrap text-sm pt-10 pb-10">
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Goland</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">TypeScript</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Gin</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">NextJS</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">PostgrSQL</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Redis</li>
                        </ul>
                        <span>
                            Gostat - a cutting-egde microservice-based application designed to handle
                            HTTP requests authentication and staticstics with finance.
                        </span>
                    </div>
                    <div className="col-span-2 w-full bg-amber-500 rounded-xl"></div>
 <div className=" flex flex-row items-center static">
                        <div className="border border-[#3d3d3d] w-10 rounded-full p-2.5"><BrandGithub className="h-5 w-5" /></div>
                    <div className="absolute right-172 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                        <ArrowUpRight className="h-5 w-5 cursor-pointer" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Project;