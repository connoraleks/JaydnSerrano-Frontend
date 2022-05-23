import Navbar from './components/Navbar'
import Display from './components/Display'
import {useState, useEffect} from 'react'
function App() {
  const [display, setDisplay] = useState("#home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbarVisibility, setNavbarVisibility] = useState("hidden md:block w-1/4 flex-grow");
  const [mobileFill, setMobileFill] = useState("white");
  useEffect(() => {
    if(mobileMenu){
      setNavbarVisibility("block absolute h-screen w-screen")
      setMobileFill("black");
    }
    else{
      setNavbarVisibility("hidden md:block w-1/4 flex-grow")
      setMobileFill("white");
    }
  }, [mobileMenu])
  useEffect(() => setMobileMenu(false), [display])
  return (
    <>
    <main className="h-screen flex">
      {/* Mobile Navbar Toggle */}
      <section className="block md:hidden p-4 fixed z-10">
        <button onClick={()=> setMobileMenu(!mobileMenu)}>
          <svg viewBox="0 0 100 80" width="3rem" height="2rem">
            <rect width="100%" height="25%" rx="10" fill={mobileFill}></rect>
            <rect y="30" width="100%" height="25%" rx="10" fill={mobileFill}></rect>
            <rect y="60" width="100%" height="25%" rx="10" fill={mobileFill}></rect>
          </svg>
        </button>
      </section>
      {/* Navbar */}
      <section className={navbarVisibility}>
        <Navbar setDisplay={setDisplay} setMobileMenu={setMobileMenu}></Navbar>
      </section>
      {/* Content Display */}
      <section className= "w-full text-white">
        <Display display={display}></Display>
      </section>
    </main>
    </>
  );
}

export default App;
