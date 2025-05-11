import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import StudentLogin from './pages/student/StudentLogin';
import StudentRegister from './pages/student/StudentRegister';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';
import StudentHome from './pages/student/StudentHome';
import StudentProfileSection from './pages/student/StudentProfileSection';
import StudentProfileEditSection from './pages/student/StudentProfileEditSection';
import StudentPasswordEditSection from './pages/student/StudentPasswordEditSection';
import NotFound from './pages/NotFound';


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
axios.defaults.withCredentials = true;

export default function App() {


 
 
  return (
    
    <Router>
         <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Landing/Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student Auth */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/StudentProfileSection" element={<StudentProfileSection />} />
        <Route path="/StudentProfileEditSection" element={<StudentProfileEditSection/>} />
        <Route path="/StudentPasswordEditSection" element={<StudentPasswordEditSection/>} />




        {/* Admin Auth */}
        <Route path="/Admin/login" element={<AdminLogin />} />
        <Route path="/Admin/register" element={<AdminRegister />} />

        {/* Redirect based on role */}
        <Route
          path="/student/home"
          element={
            <StudentHome /> 
          }
        />
  

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
