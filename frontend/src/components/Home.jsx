const Home = ({home}) => {
    return (
        <div ref={home} className="h-full flex flex-col xl:flex-row justify-between md:p-16 md:pb-0 overflow-hidden">
            <div className="w-full text-center md:text-right my-4 lg:my-auto lg:pb-16" style={{transition: "all 0.55s ease"}}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl my-4 font-bold text-white" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                <p className="text-md lg:text-lg xl:text-xl text-gray-200" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
            </div>
            <img className="w-min h-min" style={{transition: "all 0.55s ease"}} src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;