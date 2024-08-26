import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, email, message } = formData;

    // Basic form validation
    if (!name || !username || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Redirect to homepage upon successful submission
    navigate('/');
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Contact Us</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 dark:text-red-400 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600  dark:bg-pink-600 dark:hover:bg-pink-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
