const Navbar = ({setDisplay, setMobileMenu}) => {
    const closeWindow = () => setMobileMenu(false);
    const buttonHover = "text-white text-lg lg:text-xl hover:text-blue-500 px-12 lg:px-16 xl:px-24";
    return (
        <nav className="hidden md:flex h-full flex-col justify-center gap-24 bg-gray-600 bg-opacity-50 backdrop-blur-lg box-border text-center border-r border-white">
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {setDisplay("#home"); closeWindow();}}>Home</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {setDisplay("#gallery"); closeWindow();}}>Gallery</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {setDisplay("#about"); closeWindow();}}>About</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => {setDisplay("#contact"); closeWindow();}}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;