const Home = ({home}) => {
    return (
        <div ref={home} className="h-screen overflow-hidden flex flex-col justify-between items-end xl:justify-center xl:flex-row">
            <div className="w-full h-full flex flex-col items-center md:items-start md:justify-center text-center md:text-left p-4" style={{transition: "all 0.55s ease"}}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl my-4 font-bold text-white" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                <p className="text-md lg:text-lg xl:text-xl text-gray-200" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
            </div>
            <div className="w-fit h-fit flex justify-center"><img className="" style={{transition: "all 0.55s ease", maxWidth: "85%"}} src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/></div>
        </div>
    );
}

export default Home;