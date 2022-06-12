import ContactForm from './ContactForm'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
const Display = ({display, setDisplay}) => {
    return (
        <div className="w-full h-screen flex justify-center items-center overflow-y-hidden">
            {display === '#home' && <Home setDisplay={setDisplay}></Home>}
            {display === '#gallery' && <Gallery></Gallery>}
            {display === '#about' && <About></About>}
            {display === '#contact' && <ContactForm></ContactForm>}
        </div>
    )
}
export default Display;