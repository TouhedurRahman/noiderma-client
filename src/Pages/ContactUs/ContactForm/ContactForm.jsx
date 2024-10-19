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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Products</label>
                        <select
                            {...register("products", { required: true })}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select a product</option>
                            <option value="product1">Product 1</option>
                            <option value="product2">Product 2</option>
                            <option value="product3">Product 3</option>
                        </select>
                        {errors.products && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                {...register("firstName", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                {...register("lastName", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                {...register("phone", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                {...register("email", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company or Organization</label>
                        <input
                            {...register("company", { required: true })}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.company && <span className="text-red-500 text-sm">Company/Organization is required</span>}
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input
                                {...register("address", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                                {...register("city", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.city && <span className="text-red-500 text-sm">City is required</span>}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                            <input
                                {...register("state", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.state && <span className="text-red-500 text-sm">State is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                            <input
                                {...register("zipCode", { required: true })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.zipCode && <span className="text-red-500 text-sm">Zip Code is required</span>}
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Request</label>
                        <textarea
                            {...register("request", { required: true })}
                            className="w-full p-2 border border-gray-300 rounded"
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