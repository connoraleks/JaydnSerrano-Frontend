import "./gallery.css"
const Gallery = () => {
    const img = "w-32 md:w-64";
    const wrapper = "flex justify-center";
    return (
        <div className="h-full overflow-hidden">
            <div id="scrollable" className="flex justify-center items-center h-full overflow-y-scroll p-8">
                <div className="flex flex-wrap gap-16 justify-center items-center">
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?sketch"
                        alt="Image"
                        className={img}
                        id="img1"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?city"
                        alt="Image"
                        className={img}
                        id="img2"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?camera"
                        alt="Image"
                        className={img}
                        id="img3"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?games"
                        alt="Image"
                        className={img}
                        id="img4"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?sketch"
                        alt="Image"
                        className={img}
                        id="img1"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?city"
                        alt="Image"
                        className={img}
                        id="img2"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?camera"
                        alt="Image"
                        className={img}
                        id="img3"
                        />

                    </div>
                    <div className={wrapper}>
                        <img
                        src="https://source.unsplash.com/900x900/?games"
                        alt="Image"
                        className={img}
                        id="img4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;