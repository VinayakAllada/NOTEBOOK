import React from 'react';
import NavigationBar from '../Home/NavigationBar';
import SearchBar from '../Home/SearchBar';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <NavigationBar />

      {/* Hero Section */}
      <section className="text-center p-10 bg-gray-100">
        <h2 className="text-4xl font-bold mb-2">
          <em>Access and Share VNIT Notes Anytime</em>
        </h2>
        <p className="text-lg mb-4">
          Connect, contribute, and excel with curated notes
        </p>
         
        <br/>
        <div className="space-x-4">
          <Link to="/notes" className="bg-blue-500 text-white px-4 py-2 rounded">
            Browse Notes
          </Link>
          <Link to="/upload" className="bg-green-500 text-white px-4 py-2 rounded">
            Upload Notes
          </Link>
        </div>
      
      </section>

      <SearchBar />

 

      <Footer />
    </div>
  );
}
