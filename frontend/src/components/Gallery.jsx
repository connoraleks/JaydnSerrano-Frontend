import "./gallery.css"
const Gallery = () => {
    const img = "";
    const wrapper = "relative h-fit flex justify-center items-center border-2 border-white rounded-2xl overflow-hidden basis-auto md:basis-1/2 lg:basis-1/3 hover:scale-105";
    const section = "absolute bottom-0 bg-gray-600 bg-opacity-50 backdrop-blur-lg w-full h-1/6 flex justify-center items-center text-xs md:text-sm lg:text-base text-gray-200";
    return (
        <div className="h-full overflow-y-hidden p-8">
            <div className="h-full gap-8 flex flex-wrap overflow-y-scroll justify-center items-center p-8" style={{transition: "all 0.5s ease"}} >
                <button className={wrapper} style={{transition: "all 0.5s ease"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/1.jpg'} alt="gallery 1"></img>
                    <h1 className={section}>People</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/4.jpg'} alt="gallery 2"></img>
                    <h1 className={section}>Cars</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/5.jpg'} alt="gallery 3"></img>
                    <h1 className={section}>Places</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/10.jpg'} alt="gallery 4"></img>
                    <h1 className={section}>Nature</h1>
                </button>
            </div>
        </div>
    );
}

export default Gallery;