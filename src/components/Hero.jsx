import DecryptedText from "./DecryptedText";
import MoblieHero from "./MoblieHero";
import {BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight } from "./Logo";

function Hero() {
    return(
        <section id="hero" className="pt-30 pb-30 p-5">
            <MoblieHero />
            <div className="flex-col items-center gap-6 hidden md:flex">
                <div className="flex flex-row items-center justify-center gap-6 w-full">
                    <h1 className="lg:text-9xl md:text-5xl tracking-widest linefont font-semibold cursor-target">
                        <DecryptedText
                            text="Front-end"
                            speed={150}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                    <a aria-label="My Resume" href="https://docs.google.com/document/d/1IwmQ6Fb6PLMP4TrPqvlt5XFdppmeG-j3vIZLdoqc1OI/edit?usp=sharing" target="_blank" rel="nonreferrer"><div className="items-end flex flex-row justify-end gap-4 ">
                    <button className="bg-[#f5f5f5] p-2 text-[#121212] h-12 w-60 rounded-full hover:cursor-pointer italic ">My Resume</button>
                    <button className="h-12 w-12 bg-[#f5f5f5] p-5 hover:cursor-pointer rounded-full">
                        <ArrowNarrowRight className="relative -top-2.5 -left-2.5 h-8 w-8" />
                    </button>
                    </div></a>
                </div>
                <div className="flex flex-row  justify-center items-center gap-6 w-full">
                    <span className="text-wrap w-75 text-[#a6a6a6] cursor-target">
                        My Goals is to write <span className="text-[#f5f5f5]">maintainable, clean</span> and <span className="text-[#f5f5f5]">understandable code</span> to process development was enjoyable.
                        </span>
                    <h1 className="lg:text-9xl md:text-5xl tracking-widest linefont font-semibold cursor-target">
                        <DecryptedText
                            text="Developer"
                            speed={150}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                </div>
            </div>
            <div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 w-full mt-10 italic ">
                    <a href="https://github.com/manassehtodd/Finovo" target="_blank"><button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                <div className="flex items-center justify-center ">                   
                        <BrandGithub className="h-6.25 w-6.25" />
                        Github
                        </div>
                        </button>
                        </a>

                    <a href="https://www.linkedin.com/in/manasseh-todd-702812254/" target="_blank"><button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandLinkedin className="h-6.25 w-6.25" />
                        Linkedin
                        </div>
                        </button>
                        </a>
                    <a href="https://t.me/ManassehTodd" target="_blank"><button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandTelegram className="h-6.25 w-6.25" />
                        Telegram
                        </div>
                        </button>
                        </a>
                    <a href="https://wa.me/2347031011530" target="_blank"><button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandWhatsapp className="h-6.25 w-6.25" />
                        Whatsapp
                        </div></button>
                        </a>
                    <a href="mailto:manassehtodd1@gmail.com" target="_blank"><button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandInstagram className="h-6.25 w-6.25" />
                        Instagram
                        </div>
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;