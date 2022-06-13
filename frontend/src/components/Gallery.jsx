const Gallery = ({gallery}) => {
    const img = "";
    const wrapper = "relative h-fit flex justify-center items-center border-2 border-white rounded-2xl overflow-hidden basis-auto md:basis-1/2 lg:basis-1/3 group";
    const title = "group-hover:h-full group-hover:scale-150 absolute bottom-0 bg-gray-600 bg-opacity-50 backdrop-blur-lg w-full h-1/6 flex justify-center items-center text-auto text-gray-200";
    return (
        <div ref={gallery} className="h-min gap-8 flex flex-wrap justify-center items-center p-8">
                <button className={wrapper} style={{transition: "all 0.5s ease", filter: "blur(0px)", WebKitFilter: "blur(0px)"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/1.jpg'} alt="gallery 1"></img>
                    <h1 style={{transition: "all 0.5s ease"}} className={title}>People</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease", filter: "blur(0px)", WebKitFilter: "blur(0px)"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/4.jpg'} alt="gallery 2"></img>
                    <h1 style={{transition: "all 0.5s ease"}} className={title}>Cars</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease", filter: "blur(0px)", WebKitFilter: "blur(0px)"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/5.jpg'} alt="gallery 3"></img>
                    <h1 style={{transition: "all 0.5s ease"}} className={title}>Places</h1>
                </button>
                <button className={wrapper} style={{transition: "all 0.5s ease", filter: "blur(0px)", WebKitFilter: "blur(0px)"}} >
                    <img className={img} src={process.env.PUBLIC_URL + '/assets/gallery/10.jpg'} alt="gallery 4"></img>
                    <h1 style={{transition: "all 0.5s ease"}} className={title}>Nature</h1>
                </button>
            </div>
    );
}

export default Gallery;