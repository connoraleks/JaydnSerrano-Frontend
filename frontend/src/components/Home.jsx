const Home = ({home}) => {
    return (
        <div ref={home} className="h-screen w-full relative overflow-hidden flex flex-col justify-between lg:justify-center lg:flex-row md:pl-16">
            <div className="w-full flex flex-col items-center md:items-start md:justify-center" style={{transition: "all 0.55s ease"}}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl my-4 font-bold text-white w-fit" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                <p className="text-md lg:text-lg xl:text-xl text-gray-200 w-fit" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
            </div>
            <img className="w-full lg:w-auto lg:h-full mx-auto" style={{transition: "all 0.55s ease", maxWidth: "85%"}} src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;