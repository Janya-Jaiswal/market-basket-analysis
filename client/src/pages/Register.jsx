import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // Firebase Signup Logic Here
  };

  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-emerald-600 p-8 text-white">

          <span className="bg-white/20 px-4 py-2 rounded-full w-fit text-sm">
            Join Market Basket AI
          </span>

          <h1 className="text-4xl font-bold mt-6 leading-tight">
            Create Your Account
          </h1>

          <p className="mt-4 text-emerald-100 leading-7">
            Start analyzing customer behavior, uncover product
            associations, and leverage AI-powered retail insights.
          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <p>Market Basket Analysis</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <p>AI Product Recommendations</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <p>Advanced Analytics Dashboard</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                MBA
              </span>
            </div>

            <div>
              <h2 className="font-bold text-xl text-gray-900">
                Market Basket AI
              </h2>

              <p className="text-sm text-gray-500">
                Retail Analytics Platform
              </p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Create Account
          </h2>

          <p className="text-gray-500 mt-1">
            Register as a customer and start exploring insights.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-3"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
            </div>

            {/* Customer Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>

              <input
                type="text"
                value="Customer"
                disabled
                className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-xl text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Signup */}
          <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            Sign Up with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-5 text-gray-600">
            Already have an account?

            <Link
              to="/login"
              className="ml-2 text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;