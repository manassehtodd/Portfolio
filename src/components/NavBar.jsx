import { useState } from "react";

function NavBar() {

    const [open, setOpen] = useState(false);

    return(
        <section id="navbar" className="p-5">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <a href="#hero"> <span className="md:flex hidden">Todd <br />Manasseh</span>
                    <span className="md:hidden text-[#a6a6a6] flex">Todd.Manasseh</span>
                    </a>
                </div>
                <div>
                    <nav className="md:flex hidden flex-row justify-around items-center gap-8">
                        <ul><a href="#about">About</a></ul>
                        <ul><a href="#project">Projects</a></ul>
                        <ul><a href="#contact">Contacts</a></ul>
                    </nav>
                </div>
                <div>
                    <div>
                        <span className="md:flex hidden items-center justify-center">En <br /> Ge</span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
      <button
        className="flex items-center px-3 py-2 text-2xl text-white"
        onClick={() => setOpen(true)}
      >
       &#9776;
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#222222] p-6 shadow-lg z-50 transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {open && (
            <button className="text-3xl text-white cursor-pointer" onClick={() => setOpen(false)}>
                &times;
            </button>
        )}
        <ul className="flex flex-col text-2xl gap-4 mt-5">
          <li><a href="#home" className="cursor-target">Home</a></li>
          <li><a href="#solution" className="cursor-target">Solution</a></li>
          <li><a href="#about" className="cursor-target">About</a></li>
        </ul>
      </div>
                </div>
            </div>
        </section>
    );
}

export default NavBar;