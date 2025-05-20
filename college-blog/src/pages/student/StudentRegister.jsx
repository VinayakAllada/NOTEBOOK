import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    branch: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  // Clear form data when the component is mounted
  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      branch: "",
    });
    setImage(null);
    setImagePreview(null);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  // Simulate API call delay
  setTimeout(() => {
    // You can also log formData and image here if you want to see the values
    toast.success("Student registered successfully! ");
    navigate("/mainpage");
  }, 1000);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">User Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">-- Select Branch --</option>
          <option value="cse">Computer Science & Engineering (CSE)</option>
          <option value="ece">Electronics & Communication Engineering (ECE)</option>
          <option value="eee">Electrical & Electronics Engineering (EEE)</option>
          <option value="me">Mechanical Engineering (ME)</option>
          <option value="ce">Civil Engineering (CE)</option>
          <option value="it">Information Technology (IT)</option>
          <option value="aids">AI & Data Science (AI&DS)</option>
          <option value="aiml">AI & Machine Learning (AI&ML)</option>
          <option value="che">Chemical Engineering (CHE)</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        {/* Stylish Upload Button */}
        <div>
          <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 w-20 h-20 object-cover rounded-full"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/student/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default StudentRegister;