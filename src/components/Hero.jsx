import DecryptedText from "./DecryptedText";
import {BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight } from "./Logo";

function Hero() {
    return(
        <section id="hero" className="pt-30 pb-30">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-row items-center justify-center gap-6 w-full">
                    <h1 className="text-9xl tracking-widest linefont font-semibold">
                        <DecryptedText
                            text="Front-end"
                            speed={100}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                    <div className="items-end flex flex-row justify-end gap-4 ">
                    <button className="bg-[#f5f5f5] p-2 text-[#121212] h-12 w-60 rounded-full hover:cursor-pointer italic ">Projects</button>
                    <button className="h-12 w-12 bg-[#f5f5f5] p-5 hover:cursor-pointer rounded-full">
                        <ArrowNarrowRight className="relative -top-2.5 -left-2.5 h-8 w-8" />
                    </button>
                    </div>
                </div>
                <div className="flex flex-row  justify-center items-center gap-6 w-full">
                    <span className="text-wrap w-75 text-[#a6a6a6]">
                        My Goals is to write <span className="text-[#f5f5f5]">maintainable, clean</span> and <span className="text-[#f5f5f5]">understandable code</span> to process development was enjoyable.
                        </span>
                    <h1 className="text-9xl tracking-widest linefont font-semibold">
                        <DecryptedText
                            text="Developer"
                            speed={100}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-center items-center gap-6 w-full mt-10 italic ">
                    <button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                <div className="flex items-center justify-center ">                   
                        <BrandGithub className="h-6.25 w-6.25" />
                        Github
                        </div>
                        </button>

                    <button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandLinkedin className="h-6.25 w-6.25" />
                        Linkedin
                        </div>
                        </button>
                    <button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandTelegram className="h-6.25 w-6.25" />
                        Telegram
                        </div>
                        </button>
                    <button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandWhatsapp className="h-6.25 w-6.25" />
                        Whatsapp
                        </div></button>
                    <button className="hover: cursor-pointer h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                        <div className="flex items-center justify-center">
                        <BrandInstagram className="h-6.25 w-6.25" />
                        Instagram
                        </div>
                        </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;