import TargetCursor from './TargetCursor';
import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight, EmailIcon } from "./Logo";
function Footer() {
    return(
        <section id="contact" className="pt-30 p-5">
                <div>
      <TargetCursor 
        spinDuration={1.6}
        parallaxOn
  hoverDuration={0.25}
/>
            <div className="flex md:flex-row flex-col justify-between">
                    <div className="md:w-100 w-fit md:hidden block">
                    <h1 className="pb-5 text-2xl font-semibold">.../Contacts...</h1>
                    <ul className="flex flex-row gap-10 mb-5">
                        <li className="text-sm text-[#a6a6a6]"><a href='#hero'>Main</a></li>
                        <li className="text-sm text-[#a6a6a6]"><a href='#about'>About</a></li>
                        <li className="text-sm text-[#a6a6a6]"><a href='#project'>Projects</a></li>
                    </ul>

                    <div className="pt-5 border border-[#3d3d3d] rounded-4xl p-5">
                        <h1 className="text-2xl text-[#a6a6a6] pb-5">Site</h1>
                        
                    <ul className="text-sm">
                        <li className="pb-5">Handcrafted my ME /</li>
                        <li className="pb-5">Design from bĕhance /</li>
                        <li>Powered by ReactJS</li>
                    </ul>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className="lg:text-9xl text-4xl font-semibold cursor-target">TODD</h1>
                    <div className="flex flex-row">
                        <div className="flex items-baseline-last md:pr-10 p-5"><span className="text-[#a6a6a6] sm:text-sm italic">Front-end<br/> Developer</span></div>
                        <span className="lg:text-9xl text-4xl font-semibold cursor-target">Manasseh</span>
                    </div>
                </div>
                <div className="w-100 hidden md:block">
                    <h1 className="pb-5 text-2xl font-semibold">.../Contacts...</h1>
                    <ul className="flex flex-row gap-10 mb-5">
                        <li className="text-sm text-[#a6a6a6]"><a href='#hero'>Main</a></li>
                        <li className="text-sm text-[#a6a6a6]"><a href='#about'>About</a></li>
                        <li className="text-sm text-[#a6a6a6]"><a href='#project'>Projects</a></li>
                    </ul>

                    <div className="pt-5 border border-[#3d3d3d] rounded-4xl p-5">
                        <h1 className="text-2xl text-[#a6a6a6] pb-5">Site</h1>
                        
                    <ul className="text-sm">
                        <li className="pb-5">Handcrafted my ME /</li>
                        <li className="pb-5">Design from bĕhance /</li>
                        <li>Powered by ReactJS</li>
                    </ul>
                    </div>
                </div>
            </div>


            {/*LINKS */}
            <div className="flex flex-wrap md:justify-between justify-around text-[#a6a6a6] italic mt-10 ">
                <a href="https://github.com/manassehtodd/" target="_blank" className="cursor-target transition-all duration-300 hover:transform-[translateY(-.335rem)] border border-[#3d3d3d] p-3 rounded-3xl md:w-50 w-30 text-center">
                <div className="flex items-center justify-center">
                <BrandGithub className="h-6.25 w-6.25"/>Github
                </div>
                </a>
                <a href="https://linkedin.com/in/manasseh-todd-942b54291" target="_blank" className="cursor-target transition-all duration-300 hover:transform-[translateY(-.335rem)] border border-[#3d3d3d] p-3 rounded-3xl md:w-50 w-30 text-center">
                <div className="flex items-center justify-center">
                <BrandLinkedin className="h-6.25 w-6.25"/>Linkedin
                </div>
                </a>
                <a href="mailto:manassehtodd1@gmail.com" target="_blank" className="cursor-target transition-all duration-300 hover:transform-[translateY(-.335rem)] border border-[#3d3d3d] p-3 rounded-3xl md:w-50 w-30 text-center">
                    <div className="flex items-center justify-center">
                    <EmailIcon className="h-6.25 w-6.25"/>E-mail
                    </div>
                    </a>
                    <a href="https://t.me/Toddmanasseh" target="_blank" rel="noopener noreferrer" className="cursor-target transition-all duration-300 hover:transform-[translateY(-.335rem)] border border-[#3d3d3d] p-3 rounded-3xl md:w-50 w-30 text-center">
                    <div className="flex items-center justify-center">
                    <BrandTelegram className="h-6.25 w-6.25"/>Telegram
                    </div>
                    </a>
                    <a href="https://www.instagram.com/_littodd/" target="_blank" className="cursor-target transition-all duration-300 hover:transform-[translateY(-.335rem)] border border-[#3d3d3d] p-3 rounded-3xl md:w-50 w-30 text-center">
                    <div className="flex items-center justify-center">
                    <BrandInstagram className="h-6.25 w-6.25"/>Instagram
                    </div>
                    </a>
            </div>
            </div>
        </section>
    );
}

export default Footer;