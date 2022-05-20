const Navbar = ({setDisplay, setMobileMenu}) => {
    const closeWindow = () => setMobileMenu(false);
    return (
        <nav className="h-full w-full flex flex-col justify-center items-center gap-4 bg-white bg-opacity-90 backdrop-blur-lg">
            <button onClick={() => {setDisplay("#home"); closeWindow();}}>Home</button>
            <button onClick={() => {setDisplay("#gallery"); closeWindow();}}>Gallery</button>
            <button onClick={() => {setDisplay("#about"); closeWindow();}}>About</button>
            <button onClick={() => {setDisplay("#contact"); closeWindow();}}>Contact</button>
        </nav>
    )
}
export default Navbar;