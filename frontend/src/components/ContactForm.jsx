const ContactForm = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 style={{transition: "all 0.5s ease"}} className="text-4xl font-bold text-white px-16 lg:px-48">Contact Me</h1>
            <p className="text-xl my-12 text-gray-100">Use this form to tell me about you.</p>
            <form className="text-base text-gray-100 flex flex-col gap-4 items-center w-full">
                <input placeholder="Name" type="text" className="p-2 rounded w-full bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cname" required />
                <input placeholder="Email" type="email" className="p-2 rounded w-full bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cemail" required />
                <textarea placeholder="Message" className="p-2 rounded w-full bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cmessage" required />
                <button type="submit" className="text-lg text-gray-100 rounded-2xl border-gray-200 border-2 w-fit ml-1 transition duration-500 hover:bg-blue-600 hover:border-gray-300 px-4 py-2">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;