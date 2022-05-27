const About = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center gap-12 md:gap-8 px-14 md:px-72">
            <h1 className="text-4xl font-bold text-center">Jaydn Serrano</h1>
            <img className="rounded border border-white w-32 h-32" src={process.env.PUBLIC_URL + '/assets/headshot.png'} alt="headshot"></img>
            <p className="text-sm md:text-lg text-center">
                Jaydn is a 22 year old photographer specializing in people, cars, animals and nature.<br/>
                <br/>After receiving his first camera in high school, he quickly fell in love with the process.<br/>
                <br/>This longstanding love of photography stems from a yearning to capture moments in time that he feels would normally be overlooked.<br/>
                <br/>When not behind the camera you can find him playing guitar, exercising, and spending quality time with loved ones.<br/>
            </p>
        </div>
    );
}

export default About;