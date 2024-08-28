/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useBmiCalcualtor } from '../hooks/useBmiCalculator';
import { useHemoglobinStatus } from '../hooks/useHemoglobinStatus';
import { useBloodPressure } from '../hooks/useBloodPressureStatus';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function PhysicalDetails() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        hemoglobin: '',
        bloodPressure: '',
        bloodSugar: '',
        thyroid: ''
    });

    const { user } = useAuthContext();
    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, age, height, weight, hemoglobin, bloodPressure } = formData;

        if (!name || !age || !height || !weight) {
            toast.error("All fields are required.");
            setResults(null);
            return;
        }

        if (!user) {
            const hasSubmitted = localStorage.getItem('hasSubmitted');
            if (hasSubmitted) {
                toast.error("Please log in or sign up to use the form again.");
                return;
            } else {
                localStorage.setItem('hasSubmitted', 'true');
            }
        }

        // Calculate BMI
        let bmi = useBmiCalcualtor(height, weight);
        let hemoglobinStatus = useHemoglobinStatus(hemoglobin);
        let bloodPressureStatus = useBloodPressure(bloodPressure);

        // Set results
        setResults({
            bmi: bmi,
            hemoglobinStatus,
            bloodPressureStatus
        });
    };

    return (
        <>
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen flex items-center justify-center px-8 py-4">
                <div className="backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 shadow-lg rounded-lg p-8 w-full max-w-lg">
                    <h2 className="text-3xl font-extrabold text-slate-600 dark:text-gray-100 text-center mb-6">Physical Details</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData?.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="age" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData?.age}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your age"
                            />
                        </div>

                        <div>
                            <label htmlFor="height" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Height (cm)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                value={formData?.height}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your height in cm"
                            />
                        </div>

                        <div>
                            <label htmlFor="weight" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formData?.weight}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your weight in kg"
                            />
                        </div>

                        <div>
                            <label htmlFor="hemoglobin" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Hemoglobin (g/dL)</label>
                            <input
                                type="number"
                                id="hemoglobin"
                                name="hemoglobin"
                                value={formData?.hemoglobin}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your hemoglobin level"
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodPressure" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Blood Pressure (mmHg)</label>
                            <input
                                type="number"
                                id="bloodPressure"
                                name="bloodPressure"
                                value={formData?.bloodPressure}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your blood pressure"
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodSugar" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Blood Sugar (mg/dL)</label>
                            <input
                                type="number"
                                id="bloodSugar"
                                name="bloodSugar"
                                value={formData?.bloodSugar}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your blood sugar level"
                            />
                        </div>

                        <div>
                            <label htmlFor="thyroid" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Thyroid Level (TSH)</label>
                            <input
                                type="number"
                                id="thyroid"
                                name="thyroid"
                                value={formData?.thyroid}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                placeholder="Enter your thyroid level"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Results */}
                    {results && (
                        <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Results</h3>
                            <p className="text-gray-700 dark:text-gray-300">BMI: {results.bmi} </p>
                            <p className="text-gray-700 dark:text-gray-300">Hemoglobin Status: {results.hemoglobinStatus}</p>
                            <p className="text-gray-700 dark:text-gray-300">Blood Pressure Status: {results.bloodPressureStatus}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default PhysicalDetails;
