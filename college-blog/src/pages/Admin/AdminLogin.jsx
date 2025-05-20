import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ClubLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClubLogin = (e) => {
  e.preventDefault();
  // Simulate API call delay
  setTimeout(() => {
    // You can also log formData and image here if you want to see the values
    toast.success("Admin registered successfully!");
    navigate("/mainpage");
  }, 1000);
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <form
        onSubmit={handleClubLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Club Login</h2>

        <input
          type="text"
          placeholder="Club Name"
          required
          className="w-full mb-4 px-4 py-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-4 px-4 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          onClick={() => navigate('/mainpage')}
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="/club/register" className="text-blue-600 underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default ClubLogin;
