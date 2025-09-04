import { FaPhone } from "react-icons/fa6";

const ContactAddress = () => {
    return (
        <div className="mt-20 py-8 bg-white flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0 w-[90%] mx-auto">
            <div>
                <h2 className="text-3xl font-bold text-gray-600 mb-4">Manufactured by</h2>
                <p className="text-gray-800 mb-2 font-medium">SKY RESOURCES SDN. BHD.</p>
                <address className="text-gray-600">
                    No.1720, Lorong Perusahaan Utama 1, Kawasan Perindustrian<br />
                    Bukit Tengah, 14000 Bukit Mertajam (SPT) Penang, Malaysia
                </address>

            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-600 mb-4">Marketed by</h2>
                <p className="text-gray-800 mb-2 font-medium">NAVANTIS PHARMA LIMITED</p>
                <address className="text-gray-600">
                    59,60 North Rajashon,
                    Birulia Road, Savar,
                    Dhaka-1340, Bangladesh.
                </address>
                <p className="flex justify-start items-center">
                    <FaPhone className="me-2" /> +880 1329-747657
                </p>
            </div>
        </div>
    );
};

export default ContactAddress;