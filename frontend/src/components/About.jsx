const About = () => {
    return (
        <div className="w-full h-fit flex items-center justify-center px-14 md:px-24">
            <div className="w-1/2 text-left p-4">
                <h1 className="text-4xl text-white font-bold mb-1">Jaydn Serrano</h1>
                <p className="text-xl text-white mb-4">22 year old Amateur Photographer.</p>
                <div className="text-sm md:text-lg flex flex-col gap-1 text-gray-100">
                    <p>After receiving his first camera in high school, he quickly fell in love with the process.</p>
                    <p>This longstanding love of photography stems from a yearning to capture moments in time that he feels would normally be overlooked.</p>
                    <p>When not behind the camera you can find him playing guitar, exercising, and spending quality time with loved ones.</p>
                </div>
            </div>
            <div className="border-l-2 border-white w-1/2 p-16">
                <img className="border-2 border-white rounded-2xl mx-auto" src={process.env.PUBLIC_URL + '/assets/headshot.png'} alt="headshot"></img>
            </div>
        </div>
    );
}

export default About;