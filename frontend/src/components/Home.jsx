const Home = ({setDisplay}) => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row justify-between lg:justify-center gap-4">
            <div className="flex flex-col gap-2 justify-center items-start p-8">
                <div className="text-center md:text-left w-full">
                    <h1 className="text-4xl md:text-6xl my-4 font-bold text-white" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                    <p className="text-md md:text-2xl text-gray-200 mb-4 ml-2" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
                </div>
            </div>
            <img className="" src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;