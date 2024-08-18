import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { FaEdit, FaSave, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useUpdateUser } from '../hooks/useUpdateUser';

function Profile() {
  const { user } = useAuthContext();

  const [isEditing, setIsEditing] = useState(false);
  const { loading, updateUser } = useUpdateUser();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    password: '',
    email: user?.email || '',
    gender: user?.gender || '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    toggleEditMode();
    updateUser(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg flex flex-col justify-center shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-600">Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            src={user?.profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-pink-400"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-600 font-semibold mb-2">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          ) : (
            <p className="text-gray-800">{user?.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 font-semibold mb-2">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          ) : (
            <p className="text-gray-800">@{user?.username}</p>
          )}
        </div>

        <div className="mb-4 relative">
          <label className="text-gray-600 font-semibold mb-2">Password:</label>
          {isEditing ? (
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          ) : (
            <p className="text-gray-800">********</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 font-semibold mb-2">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          ) : (
            <p className="text-gray-800">{user?.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-600 font-semibold mb-2">Gender:</label>
          {isEditing ? (
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p className="text-gray-800 capitalize">{user?.gender}</p>
          )}
        </div>

        <button
          onClick={isEditing ? handleSave : toggleEditMode}
          className={`p-2 mt-4 rounded text-white duration-200 ${isEditing ? 'bg-green-600 hover:bg-green-800' : 'bg-pink-600 hover:bg-pink-800'}`}
        >
          {isEditing ? <><FaSave className="inline mr-2" />Save</> : <><FaEdit className="inline mr-2" />Edit Profile</>}
        </button>
      </div>
    </div>
  );
}

export default Profile;
