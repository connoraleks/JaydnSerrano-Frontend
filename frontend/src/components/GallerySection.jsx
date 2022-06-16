import {useState, useEffect} from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from "./Photos";
const GallerySection = ({gallery}) => {
    const section = "sm:basis-1/3 flex flex-col items-center justify-center border-2 border-white rounded-2xl p-4 w-4/5 h-1/5 relative opacity-85 hover:opacity-100 hover:shadow-md hover:shadow-white";
    const expandedSection = "z-20 pt-8 flex flex-col items-center justify-center h-min-fit h-screen w-full absolute bg-black bg-opacity-50 backdrop-blur-lg";
    const title = "text-center text-4xl font-bold"
    const button = "w-full h-full absolute hover:outline-offset-2 hover:outline-white"
    const styledbutton = "py-2 px-4 w-fit h-fit border-2 border-white hover:shadow-md hover:shadow-white text-white rounded-2xl m-4 "
    const expandedGalleryStyle = "flex justify-center items-start w-full h-fit overflow-y-scroll";
    const galleryStyle = "hidden";
    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    const [section3, setSection3] = useState(false);
    const [section4, setSection4] = useState(false);
    useEffect((ref) => {if(gallery.current && (section1 || section2 || section3 || section4)) gallery.current.scrollIntoView({behavior: "smooth", block: "start"})}, [section1, section2, section3, section4]);
    return (
        <div ref={gallery} className="h-min-fit h-screen gap-8 flex flex-wrap flex-col sm:flex-row justify-center items-center p-8 text-white relative">
            <section style={section1 ? {transition: "all 0.5s ease"}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/1.jpg'})`, backgroundSize: 'cover', transition: "all 0.25s ease"}} className={section1 ? expandedSection:section}>
                <h1 className={title}>People</h1>
                <button style={{transition: "all 0.5s ease"}} className={section1 ? styledbutton:button} onClick={() => setSection1(!section1)}>{section1 ? 'Toggle FullScreen' : ''}</button>
                <div className={section1 ? expandedGalleryStyle:galleryStyle}><Gallery photos={photos}/></div>
            </section>
            <section style={section2 ? {transition: "all 0.5s ease"}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/5.jpg'})`, backgroundSize: 'cover', transition: "all 0.25s ease"}} className={section2 ? expandedSection:section}>
                <h1 className={title}>Places</h1>
                <button style={{transition: "all 0.5s ease"}} className={section2 ? styledbutton:button} onClick={() => setSection2(!section2)}>{section2 ? 'Toggle FullScreen' : ''}</button>
                <div className={section2 ? expandedGalleryStyle:galleryStyle}><Gallery photos={photos}/></div>
            </section>
            <section style={section3 ? {transition: "all 0.5s ease"}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/6.jpg'})`, backgroundSize: 'cover', transition: "all 0.25s ease"}} className={section3 ? expandedSection:section}>
                <h1 className={title}>Nature</h1>
                <button style={{transition: "all 0.5s ease"}} className={section3 ? styledbutton:button} onClick={() => setSection3(!section3)}>{section3 ? 'Toggle FullScreen' : ''}</button>
                <div className={section3 ? expandedGalleryStyle:galleryStyle}><Gallery photos={photos}/></div>
            </section>
            <section style={section4 ? {transition: "all 0.5s ease"}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/11.png'})`, backgroundSize: 'cover', transition: "all 0.25s ease"}} className={section4 ? expandedSection:section}>
                <h1 className={title}>Cars</h1>
                <button style={{transition: "all 0.5s ease"}} className={section4 ? styledbutton:button} onClick={() => setSection4(!section4)}>{section4 ? 'Toggle FullScreen' : ''}</button>
                <div className={section4 ? expandedGalleryStyle:galleryStyle}><Gallery photos={photos}/></div>
            </section>

        </div>
    );
}

export default GallerySection;