import ContactForm from './ContactForm'
import Home from './Home'
import GallerySection from './GallerySection'
import About from './About'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Display = ({home,gallery,about,contact}) => {
    const [sections, setSections] = useState(null);
    const [photos, setPhotos] = useState(null);
    const fetchSections = async () => {
        const res = await axios('https://api.jaydnserrano.com/sections');
        if(res.data.success) setSections(res.data.sections);
    }
    const fetchPhotos = async () => {
        const res = await axios('https://api.jaydnserrano.com/photos');
        if(res.data.success) setPhotos(res.data.photos);
    }

    useEffect(() => {
        fetchSections();
    }, []);
    useEffect(() => {
        if(sections) {
            console.log('sections',sections);
            fetchPhotos();
        }
    } , [sections]);
    useEffect(() => {
        if(photos) console.log(photos);
    }, [photos]);
    return (
        <div className="sm:pt-0 md:pl-48 w-full h-full">
            <div className="w-full h-full overflow-y-scroll">
                <Home home={home}></Home>
                <About about={about}></About>
                {sections && <GallerySection galleryref={gallery} directory={sections}></GallerySection>}
                <ContactForm contact={contact}></ContactForm>
            </div>
        </div>
    )
}
export default Display;