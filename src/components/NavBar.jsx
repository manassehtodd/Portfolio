function NavBar() {
    return(
        <section id="navbar" className="p-5">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <a href="#hero"> <span>Todd <br />Manasseh</span></a>
                </div>
                <div>
                    <nav className="flex flex-row justify-around items-center gap-8">
                        <ul><a href="#about">About</a></ul>
                        <ul><a href="#project">Projects</a></ul>
                        <ul><a href="#contact">Contacts</a></ul>
                    </nav>
                </div>
                <div>
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-[#a6a6a6]">
                        <span className="relative h-10 w-10 top-1/3 left-10 flex items-center justify-center">En <br /> Ge</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavBar;