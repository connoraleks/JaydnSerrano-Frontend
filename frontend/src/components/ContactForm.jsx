const ContactForm = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-start ">
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
            <p className="text-xl my-12 text-gray-100">Use this form to tell me about you.</p>
            <form className="text-base text-gray-100 flex flex-col gap-4 items-center w-full">
                <input placeholder="Name" type="text" className="p-2 rounded w-3/5 bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cname" required />
                <input placeholder="Email" type="email" className="p-2 rounded w-3/5 bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cemail" required />
                <textarea placeholder="Message" className="p-2 rounded w-3/5 bg-transparent border-white border placeholder-gray-100 focus:outline-none focus:placeholder-gray-300" id="cmessage" required />
                <button type="submit" className="p-2 bg-transparent rounded-xl border-white border hover:border-gray-300 hover:text-gray-300 active:border-blue-700 active:text-blue-700">Submit Message</button>
            </form>
        </div>
    );
}

export default ContactForm;