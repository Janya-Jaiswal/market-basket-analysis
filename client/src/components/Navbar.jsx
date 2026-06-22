import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/slices/authSlice';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get Auth and Cart states from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  // Calculate total items in cart
  const cartItemCount =
    items?.reduce((total, item) => total + (item.quantity || 1), 0) || 0;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">MBA</span>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight hidden sm:block">
                Store
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              About Us
            </Link>

            <Link
              to="/features"
              className="text-gray-600 hover:text-emerald-600 font-medium transition"
            >
              Features
            </Link>

            {user?.role === 'admin' && (
              <Link
                to="/admin"
                className="text-gray-600 hover:text-emerald-600 font-medium transition"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Side: Cart & Auth */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Cart Icon (Always Visible) */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-emerald-600 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Badge */}
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Auth Conditional Rendering */}
            {isAuthenticated ? (
              <div className="hidden sm:flex items-center space-x-4">
                {/* User Avatar & Name */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold uppercase">
                    {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden lg:block">
                    {user?.name || 'User'}
                  </span>
                </div>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-600 hover:text-red-800 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-emerald-600 font-medium transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
          >
            Products
          </Link>

          {/* Mobile Auth Status */}
          {isAuthenticated ? (
            <div className="pt-4 mt-4 border-t border-gray-100">
              <div className="flex items-center px-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold uppercase text-lg">
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-800">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {user?.email}
                  </p>
                </div>
              </div>

              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 mb-2"
                >
                  Admin Dashboard
                </Link>
              )}

              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-emerald-600 text-white text-center hover:bg-emerald-700"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
