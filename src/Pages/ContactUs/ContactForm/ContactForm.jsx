import { useForm } from 'react-hook-form';
import useProducts from '../../../Hooks/useProducts';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ role, title, subtitle, description }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [products] = useProducts();
    const navigate = useNavigate();

    const onSubmit = data => {
        const newQuery = {
            role: role,
            pname: data.product,
            name: data.fname + " " + data.lname,
            phone: data.phone,
            email: data.email,
            company: data.company,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            message: data.request
        };

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5000/queries', newQuery)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            navigate('/');
                            Swal.fire({
                                title: "Submitted!",
                                text: "We reply you as soon as possible.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
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
                            {...register("product", { required: true })}
                            className="w-full p-2 border border-black"
                        >
                            <option value="">Select a product</option>
                            {
                                products &&
                                products.map((product) => (
                                    <option
                                        key={product.id}
                                        value={product.name}
                                    >
                                        {product.name}
                                    </option>
                                ))
                            }
                        </select>
                        {errors.products && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("fname", { required: true })}
                                className="w-full p-2 border border-black"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("lname", { required: true })}
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
                                {...register("zip", { required: true })}
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