const Navbar = ({setDisplay, setMobileMenu}) => {
    const closeWindow = () => setMobileMenu(false);
    const buttonHover = "text-black hover:text-blue-700"
    return (
        <nav className="h-full w-full flex flex-col justify-center gap-24 bg-white bg-opacity-90 backdrop-blur-lg px-4 pb-20 box-border text-center">
            <h1 className="text-3xl font-bold text-center hover:text-blue-700">Jaydn Serrano<br/>Photography</h1>
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