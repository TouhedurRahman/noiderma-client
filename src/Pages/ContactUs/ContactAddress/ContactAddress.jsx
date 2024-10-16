import React from 'react';

const ContactAddress = () => {
    return (
        <div className="mt-20 bg-[#E2E2E2] p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Head Office Address */}
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Head Office</h2>
                    <p className="text-gray-700 mb-2">Navantis Pharma Limited</p>
                    <p className="text-gray-700">123 Corporate Avenue</p>
                    <p className="text-gray-700">Dhaka, Bangladesh</p>
                    <p className="text-gray-700">Phone: +880 1329-747657</p>
                    <p className="text-gray-700">Email: headoffice@navantispharma.com</p>
                </div>

                {/* Manufacturing Plant Address */}
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Manufacturing Plant</h2>
                    <p className="text-gray-700 mb-2">Navantis Pharma Limited</p>
                    <p className="text-gray-700">456 Industrial Road</p>
                    <p className="text-gray-700">Gazipur, Bangladesh</p>
                    <p className="text-gray-700">Phone: +880 1329-747657</p>
                    <p className="text-gray-700">Email: plant@navantispharma.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;
