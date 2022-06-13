const Navbar = ({pages}) => {
    const buttonHover = "text-white text-lg lg:text-xl hover:text-blue-500";
    const nav = "hidden w-48 md:flex absolute left-0 h-screen flex-col justify-center gap-24 bg-gray-600 bg-opacity-50 backdrop-blur-lg box-border text-center border-r border-white";
    const scrollTo = (ref) => {
        console.log(ref);
        if(ref.current) ref.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
    return (
        <nav className={nav}>
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[0])}>Home</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[1])}>About</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[2])}>Gallery</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[3])}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;