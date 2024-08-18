import { useState } from 'react';
import { useBmiCalcualtor } from '../hooks/useBmiCalculator';
import { useHemoglobinStatus } from '../hooks/useHemoglobinStatus';
import { useBloodPressure } from '../hooks/useBloodPressureStatus';
import toast from 'react-hot-toast';
import {useAuthContext} from '../context/AuthContext'

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

    const {user} = useAuthContext()

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
            toast.error("all fields are required ")
            setResults(null)
            return
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

        // // Calculate BMI
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let bmi = useBmiCalcualtor(height, weight)

        // Determine Hemoglobin status (example ranges)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let hemoglobinStatus = useHemoglobinStatus(hemoglobin);


        // Determine Blood Pressure status (example ranges)
        // eslint-disable-next-line react-hooks/rules-of-hooks
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
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 min-h-screen flex items-center justify-center px-8 py-4 ">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                    <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Physical Details</h2>

                    <form onSubmit={handleSubmit} className=''>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData?.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData?.age}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="height" className="block text-gray-700 font-semibold mb-2">Height (cm)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                value={formData?.height}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formData?.weight}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="hemoglobin" className="block text-gray-700 font-semibold mb-2">Hemoglobin (g/dL)</label>
                            <input
                                type="number"
                                id="hemoglobin"
                                name="hemoglobin"
                                value={formData?.hemoglobin}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="bloodPressure" className="block text-gray-700 font-semibold mb-2">Blood Pressure (mmHg)</label>
                            <input
                                type="number"
                                id="bloodPressure"
                                name="bloodPressure"
                                value={formData?.bloodPressure}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"

                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="bloodSugar" className="block text-gray-700 font-semibold mb-2">Blood Sugar (mg/dL)</label>
                            <input
                                type="number"
                                id="bloodSugar"
                                name="bloodSugar"
                                value={formData?.bloodSugar}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="thyroid" className="block text-gray-700 font-semibold mb-2">Thyroid Level (TSH)</label>
                            <input
                                type="number"
                                id="thyroid"
                                name="thyroid"
                                value={formData?.thyroid}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                    {/* Results */}
                    {results && (
                        <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Results</h3>
                            <p>BMI: {results.bmi} </p>
                            <p>Hemoglobin Status: {results.hemoglobinStatus}</p>
                            <p>Blood Pressure Status: {results.bloodPressureStatus}</p>
                        </div>
                    )}


                </div>
            </div>
        </>
    );
}

export default PhysicalDetails;
