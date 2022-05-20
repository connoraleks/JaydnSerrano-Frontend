const ContactForm = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center justify-start">
            <p className="text-xl my-12 font-bold">Use this form to tell me about you.</p>
            <form className="text-base text-black flex flex-col gap-4 items-center w-full">
                <input placeholder="Name" type="text" className="p-2 rounded w-3/4" id="cname" required />
                <input placeholder="Email" type="email" className="p-2 rounded w-3/4" id="cemail" required />
                <textarea placeholder="Message" className="p-2 rounded w-3/4" id="cmessage" required />
                <button type="submit" className="p-2 bg-white rounded-xl">Submit Message</button>
            </form>
        </div>
    );
}

export default ContactForm;