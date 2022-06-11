const Navbar = ({setDisplay, setMobileMenu}) => {
    const closeWindow = () => setMobileMenu(false);
    const buttonHover = "text-white text-xl hover:text-blue-500 px-8 lg:px-16 xl:px-24";
    return (
        <nav className="hidden md:flex h-full flex-col justify-center gap-24 bg-black bg-opacity-75 backdrop-blur-lg box-border text-center">
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button className={buttonHover} onClick={() => {setDisplay("#home"); closeWindow();}}>Home</button>
                <button className={buttonHover} onClick={() => {setDisplay("#gallery"); closeWindow();}}>Gallery</button>
                <button className={buttonHover} onClick={() => {setDisplay("#about"); closeWindow();}}>About</button>
                <button className={buttonHover} onClick={() => {setDisplay("#contact"); closeWindow();}}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;