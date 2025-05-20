import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import StudentLogin from './pages/student/StudentLogin';
import StudentRegister from './pages/student/StudentRegister';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';
import StudentHome from './pages/student/StudentHome';
import StudentProfileSection from './pages/student/StudentProfileSection';
import StudentProfileEditSection from './pages/ProfileEditSection';
import StudentPasswordEditSection from './pages/Student/StudentPasswordEditSection';
import NotFound from './pages/NotFound';
import BrowseNotes from './Home/BrowseNotes';
import UploadNotes from './Home/UploadNotes';
import UploadedNotes from './Home/Uploadednotes';
import Downloadednotes from './Home/Downloadednotes';
import Homepage from './Home/Homepage';
import NavigationBar from './Home/NavigationBar';
import SearchBar from './Home/SearchBar';
import Footer from './Home/Footer'; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Landing/Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<Homepage />} />

        {/* Student Auth */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/StudentProfileSection" element={<StudentProfileSection />} />
        <Route path="/StudentProfileEditSection" element={<StudentProfileEditSection />} />
        <Route path="/StudentPasswordEditSection" element={<StudentPasswordEditSection />} />
        <Route path="/notes" element={<BrowseNotes />} />
        <Route path="/uploadednotes" element={<UploadedNotes />} />
        <Route path="/upload" element={<UploadNotes />} />
        <Route path="/downloadednotes" element={<Downloadednotes />} />
        <Route path="/navigationbar" element={<NavigationBar />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/footer" element={<Footer />} />

        {/* Admin Auth */}
        <Route path="/Admin/login" element={<AdminLogin />} />
        <Route path="/Admin/register" element={<AdminRegister />} />

        {/* Redirect based on role */}
        <Route path="/student/home" element={<StudentHome />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}