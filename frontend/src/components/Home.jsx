const Home = ({home}) => {
    return (
        <div ref={home} className="h-screen w-full relative overflow-hidden box-border">
            <div className="w-full sm:w-1/2 h-full flex flex-col justify-center pl-16 pr-20 lg:ml-12 pb-96 xl:pb-48 2xl:pb-0" style={{transition: "all 0.55s ease"}}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl my-4 font-bold text-white w-fit" style={{transition: "all 0.5s ease"}} >Jaydn Serrano Photography</h1>
                <p className="text-md lg:text-lg xl:text-xl text-gray-200 pr-4 w-fit line-" style={{transition: "all 0.5s ease"}} >Don't lose track of the finer details.</p>
            </div>
            <img className="h-3/5 md:h-4/5 w-max absolute -z-10 left-0 right-0 bottom-0 ml-auto mr-4 lg:mr-32 xl:mr-48" style={{transition: "all 0.55s ease", maxWidth: "85%"}} src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;