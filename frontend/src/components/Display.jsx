import ContactForm from './ContactForm'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
const Display = ({home,gallery,about,contact}) => {
    return (
        <div className="md:pl-48 w-full h-full">
            <div className="w-full h-full overflow-y-scroll">
                <Home home={home}></Home>
                <Gallery gallery={gallery}></Gallery>
                <About about={about}></About>
                <ContactForm contact={contact}></ContactForm>
            </div>
        </div>
    )
}
export default Display;