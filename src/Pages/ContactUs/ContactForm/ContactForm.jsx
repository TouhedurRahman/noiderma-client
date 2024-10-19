import { useForm } from 'react-hook-form';

const ContactForm = ({ title, subtitle, description }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-[90%] md:w-[75%] lg:w-[60%] mx-auto'>
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 text-center">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                        {title || subtitle}
                    </h2>
                    <p className="text-gray-600">{description}</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full space-y-4"
                >
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Products <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register("products", { required: true })}
                            className="w-full p-2 border border-black"
                        >
                            <option value="">Select a product</option>
                            <option value="product1">Product 1</option>
                            <option value="product2">Product 2</option>
                            <option value="product3">Product 3</option>
                        </select>
                        {errors.products && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("firstName", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("lastName", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("phone", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company or Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("company", { required: true })}
                            className="w-full p-2 border border-black"
                        />
                        {errors.company && <span className="text-red-500 text-sm">Company/Organization is required</span>}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("address", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("city", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.city && <span className="text-red-500 text-sm">City is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                State <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("state", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.state && <span className="text-red-500 text-sm">State is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Zip Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("zipCode", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.zipCode && <span className="text-red-500 text-sm">Zip Code is required</span>}
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Request <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            {...register("request", { required: true })}
                            className="w-full p-2 border border-black"
                            rows="4"
                        />
                        {errors.request && <span className="text-red-500 text-sm">Request is required</span>}
                    </div>

                    <div className="w-full">
                        <button
                            type="submit"
                            className="py-2 px-10 bg-black text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;