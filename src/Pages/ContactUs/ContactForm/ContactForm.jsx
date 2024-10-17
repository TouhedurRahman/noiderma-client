const ContactForm = ({ title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[60%] max-auto my-10 text-center">
                <h2 className="text-xl font-medium mb-3">{title}</h2>
                <p>{description}</p>
            </div>
            <form>
                Form comming soon...
            </form>
        </div>
    );
};

export default ContactForm;
