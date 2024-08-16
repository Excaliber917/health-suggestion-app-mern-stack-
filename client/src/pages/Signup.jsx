import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useSignup from '../hooks/useSignup';
import { Link } from 'react-router-dom';
function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        gender: ''
    });

    const { loading, signup } = useSignup()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and submit form data
        // console.log(formData);
        signup(formData)

    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 flex items-center justify-center p-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-8 text-slate-600">Sign Up</h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            placeholder='enter your full name'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            placeholder='enter a unique username'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            placeholder='enter a email'
                        />
                    </div>
                    <div className="mb-4 relative  flex items-center">

                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            placeholder='set your password'
                        />

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="mb-6">
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
                <Link to="/login" className='my-2 text-slate-400 underline hover:text-pink-700'>Already have an account ? Log In now</Link>
            </div>
        </div>
    );
}

export default Signup;
