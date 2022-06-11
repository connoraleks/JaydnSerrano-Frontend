const Home = ({setDisplay}) => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-start md:justify-center overflow-y-hidden gap-4">
            <div className="w-fit md:h-full flex flex-col gap-2 justify-end md:justify-center items-center md:items-start mt-auto md:ml-64 lg:ml-64 xl:ml-24 2xl:ml-0">
                <div className="text-center md:text-left w-full">
                    <h1 className="text-2xl md:text-4xl my-4 font-bold text-white">Jaydn Serrano Photography</h1>
                    <p className="text-md md:text-lg text-gray-200 mb-4 ml-1">Don't lose track of the finer details.</p>
                </div>
                <button className="text-lg text-gray-100 rounded-2xl border-gray-200 border-2 p-3 w-fit ml-1 transition duration-500 hover:bg-blue-600 hover:border-gray-300" onClick={() => {setDisplay("#gallery")}}>Continue...</button>
            </div>
            <img className="max-h-full" src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="jaydn headshot"/>
        </div>
    );
}

export default Home;