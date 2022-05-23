const Navbar = ({setDisplay, setMobileMenu}) => {
    const closeWindow = () => setMobileMenu(false);
    return (
        <nav className="h-full w-full flex flex-col justify-center gap-24 bg-white bg-opacity-90 backdrop-blur-lg px-4 pb-20 box-border text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Jaydn Serrano<br/>Photography</h1>
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button onClick={() => {setDisplay("#home"); closeWindow();}}>Home</button>
                <button onClick={() => {setDisplay("#gallery"); closeWindow();}}>Gallery</button>
                <button onClick={() => {setDisplay("#about"); closeWindow();}}>About</button>
                <button onClick={() => {setDisplay("#contact"); closeWindow();}}>Contact</button>
            </div>
        </nav>
    )
}
export default Navbar;