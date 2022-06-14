import {useState} from "react";
const Navbar = ({pages}) => {
    const buttonHover = "text-white text-lg lg:text-xl hover:text-blue-500";
    const [nav, setNav] = useState("z-20 -translate-x-full md:translate-x-0 h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center sm:border-r sm:border-white");
    const scrollTo = (ref) => {
        console.log(ref);
        if(ref.current) ref.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
    return (
        <>
        <nav style={{transition: "all 0.5s ease"}} className={nav}>
            <div className="w-full flex flex-col justify-center items-center gap-4 text-lg">
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[0])}>Home</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[1])}>About</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[2])}>Gallery</button>
                <button className={buttonHover} style={{transition: "all 0.5s ease"}}  onClick={() => scrollTo(pages[3])}>Contact</button>
            </div>
        </nav>
        <button className="m-4 z-50 absolute md:hidden text-red-500 text-lg lg:text-xl hover:text-blue-500" style={{transition: "all 0.5s ease"}}  onClick={() => setNav("z-20 h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center")}>Open</button>
        <button className="m-4 z-50 absolute md:hidden text-red-500 text-lg lg:text-xl hover:text-blue-500 right-0" style={{transition: "all 0.5s ease"}}  onClick={() => setNav("z-20 -translate-x-full h-screen w-screen sm:w-48 flex absolute left-0 flex-col justify-center gap-24 bg-black bg-opacity-50 backdrop-blur-lg box-border text-center")}>Close</button>
        </>
    )
}
export default Navbar;