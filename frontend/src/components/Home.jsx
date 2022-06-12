const Home = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            <div className="h-1/3 lg:w-3/5 absolute mx-auto left-0 right-0 lg:ml-0 bottom-0 top-0 mt-8 lg:my-auto px-12 flex flex-col gap-2 z-10">
                <div className="text-center md:text-left w-full">
                    <h1 className="text-4xl md:text-6xl my-4 font-bold text-white" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                    <p className="text-md md:text-2xl text-gray-200 mb-4 ml-2" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
                </div>
            </div>
            <img style={{transition: "all 0.55s ease"}} className="h-2/3 lg:h-screen absolute mx-auto left-0 right-0 lg:mr-0 bottom-0 z-0" src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;