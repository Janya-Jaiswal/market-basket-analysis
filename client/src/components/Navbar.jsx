import React from 'react';
import { Link } from 'react-router';
const Navbar=()=>{
    return(
        <>
 <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                MBA
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Market Basket AI
              </h1>

              <p className="text-xs text-gray-500">
                Retail Analytics Platform
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/features"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Features
            </Link>

            <Link
              to="/solutions"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Solutions
            </Link>

            <Link
              to="/analytics"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Analytics
            </Link>

            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              About Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>

          </div>

        </div>
      </div>
    </nav>

        </>
    )
}
export default Navbar;