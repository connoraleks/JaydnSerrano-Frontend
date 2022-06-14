import ContactForm from './ContactForm'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
const Display = ({home,gallery,about,contact}) => {
    return (
        <div className="sm:pt-0 md:pl-48 w-full h-full">
            <div className="w-full h-full overflow-y-scroll">
                <Home home={home}></Home>
                <About about={about}></About>
                <Gallery gallery={gallery}></Gallery>
                <ContactForm contact={contact}></ContactForm>
            </div>
        </div>
    )
}
export default Display;