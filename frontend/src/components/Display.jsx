import ContactForm from './ContactForm'
const Display = ({display}) => {
    let title = display.charAt(1).toUpperCase() + display.slice(2);
    return (
        <div className="h-full w-full flex flex-col justify-center items-center p-4 py-24 md:p-8 lg:p16">
            <h1 className="text-4xl">{title}</h1>
            {display === '#contact' && <ContactForm></ContactForm>}
        </div>
    )
}
export default Display;