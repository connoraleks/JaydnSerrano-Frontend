import ContactForm from './ContactForm'
import Home from './Home'
import GallerySection from './GallerySection'
import About from './About'
const Display = ({home,gallery,about,contact}) => {
    return (
        <div className="sm:pt-0 md:pl-48 w-full h-full">
            <div className="w-full h-full overflow-y-scroll">
                <Home home={home}></Home>
                <About about={about}></About>
                <GallerySection gallery={gallery}></GallerySection>
                <ContactForm contact={contact}></ContactForm>
            </div>
        </div>
    )
}
export default Display;