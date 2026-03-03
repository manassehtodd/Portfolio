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
                    <div>
                        <span className="flex items-center justify-center">En <br /> Ge</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavBar;