import {useState} from 'react';
const Gallery = ({gallery}) => {
    const section = "sm:basis-1/3 flex flex-col items-center justify-center border-2 border-white rounded-2xl p-4 w-4/5 h-1/5 relative";
    const expandedSection = "z-20 flex flex-col items-center justify-center p-4 h-screen w-full absolute bg-black bg-opacity-50 backdrop-blur-lg";
    const title = "text-center text-4xl font-bold mb-4"
    const button = "w-full h-full absolute"
    const styledbutton = "py-2 px-4 w-fit h-fit border-2 border-white hover:bg-blue-700 text-white rounded-2xl"
    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    const [section3, setSection3] = useState(false);
    const [section4, setSection4] = useState(false);
    return (
        <div ref={gallery} className="h-min-fit h-screen gap-8 flex flex-wrap flex-col sm:flex-row justify-center items-center p-8 text-white relative">
            <section style={section1 ? {}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/1.jpg'})`, backgroundSize: 'cover'}} className={section1 ? expandedSection:section}>
                <h1 className={title}>People</h1>
                <button style={{transition: "all 0.5s ease"}} className={section1 ? styledbutton:button} onClick={() => setSection1(!section1)}>{section1 ? 'Toggle FullScreen' : ''}</button>
            </section>
            <section style={section2 ? {}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/5.jpg'})`, backgroundSize: 'cover'}} className={section2 ? expandedSection:section}>
                <h1 className={title}>Places</h1>
                <button style={{transition: "all 0.5s ease"}} className={section2 ? styledbutton:button} onClick={() => setSection2(!section2)}>{section2 ? 'Toggle FullScreen' : ''}</button>
            </section>
            <section style={section3 ? {}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/6.jpg'})`, backgroundSize: 'cover'}} className={section3 ? expandedSection:section}>
                <h1 className={title}>Nature</h1>
                <button style={{transition: "all 0.5s ease"}} className={section3 ? styledbutton:button} onClick={() => setSection3(!section3)}>{section3 ? 'Toggle FullScreen' : ''}</button>
            </section>
            <section style={section4 ? {}:{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/gallery/11.png'})`, backgroundSize: 'cover'}} className={section4 ? expandedSection:section}>
                <h1 className={title}>Cars</h1>
                <button style={{transition: "all 0.5s ease"}} className={section4 ? styledbutton:button} onClick={() => setSection4(!section4)}>{section4 ? 'Toggle FullScreen' : ''}</button>
            </section>

        </div>
    );
}

export default Gallery;