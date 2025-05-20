import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  // Simulate API call delay
  setTimeout(() => {
    // You can also log formData and image here if you want to see the values
    toast.success("Student logged in successfully! ");
    navigate("/mainpage");
  }, 1000);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">Student Login</h2>

        <input
          type="email"
          className="w-full mb-4 px-4 py-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full mb-6 px-4 py-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
         type="submit"
         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/student/register")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
// done 