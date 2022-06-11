import "./gallery.css"
const Gallery = () => {
    const img = "";
    const wrapper = "flex justify-center border-2 border-white rounded-2xl overflow-hidden basis-auto md:basis-1/2 lg:basis-1/3";
    return (
        <div className="h-screen overflow-hidden flex justify-center items-center p-8">
            <div id="scrollable" className="h-full flex justify-center overflow-y-scroll">
                <div className="h-full gap-8 flex flex-wrap justify-center items-center">
                    <div className={wrapper}>
                        <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/1.jpg'} alt="gallery 1"></img>
                    </div>
                    <div className={wrapper}>
                        <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/4.jpg'} alt="gallery 2"></img>
                    </div>
                    <div className={wrapper}>
                        <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/6.jpg'} alt="gallery 3"></img>
                    </div>
                    <div className={wrapper}>
                        <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/8.jpg'} alt="gallery 4"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;