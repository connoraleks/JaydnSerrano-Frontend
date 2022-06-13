const Home = ({home}) => {
    return (
        <div ref={home} className="h-screen w-full relative overflow-hidden box-border">
            <div className="w-full mt-20 sm:mt-24 md:mt-0 sm:w-1/2 h-full flex flex-col justify-start xl:justify-center p-16" style={{transition: "all 0.55s ease"}}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl my-4 font-bold text-white w-fit" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                <p className="text-md lg:text-lg xl:text-xl text-gray-200 pr-4 w-fit" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
            </div>
            <img className="h-3/5 md:h-4/5 lg:h-full w-min absolute -z-10 left-0 right-0 bottom-0 ml-auto mr-4 lg:mr-16" style={{transition: "all 0.55s ease"}} src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;