import ContactForm from './ContactForm'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
const Display = ({display}) => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center p-4 py-24 md:p-8 lg:p16">
            {display === '#home' && <Home></Home>}
            {display === '#gallery' && <Gallery></Gallery>}
            {display === '#about' && <About></About>}
            {display === '#contact' && <ContactForm></ContactForm>}
        </div>
    )
}
export default Display;