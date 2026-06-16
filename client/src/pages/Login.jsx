import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        setLoading(false);
        return;
      }
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      alert('Login Successful');
      if (data.data.user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      {' '}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
        {' '}
        {/* Left Side */}{' '}
        <div className="hidden lg:flex flex-col justify-center bg-emerald-600 p-12 text-white">
          {' '}
          <span className="bg-white/20 px-4 py-2 rounded-full w-fit text-sm">
            {' '}
            AI-Powered Retail Analytics{' '}
          </span>{' '}
          <h1 className="text-5xl font-bold mt-8 leading-tight">
            {' '}
            Welcome Back{' '}
          </h1>{' '}
          <p className="mt-6 text-emerald-100 text-lg leading-8">
            {' '}
            Analyze customer transactions, discover buying patterns, generate
            recommendations, and unlock powerful retail insights using AI.{' '}
          </p>{' '}
          <div className="mt-12 space-y-5">
            {' '}
            <div className="flex items-center gap-4">
              {' '}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                {' '}
                ✓{' '}
              </div>{' '}
              <p>Market Basket Analysis</p>{' '}
            </div>{' '}
            <div className="flex items-center gap-4">
              {' '}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                {' '}
                ✓{' '}
              </div>{' '}
              <p>AI Recommendations</p>{' '}
            </div>{' '}
            <div className="flex items-center gap-4">
              {' '}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                {' '}
                ✓{' '}
              </div>{' '}
              <p>Analytics Dashboard</p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        {/* Right Side */}{' '}
        <div className="p-8 md:p-14">
          {' '}
          <div className="flex items-center gap-3 mb-8">
            {' '}
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
              {' '}
              <span className="text-white font-bold text-lg">MBA</span>{' '}
            </div>{' '}
            <div>
              {' '}
              <h2 className="font-bold text-xl text-gray-900">
                {' '}
                Market Basket AI{' '}
              </h2>{' '}
              <p className="text-sm text-gray-500">
                {' '}
                Retail Analytics Platform{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>{' '}
          <p className="text-gray-500 mt-2">
            {' '}
            Login to access your dashboard.{' '}
          </p>{' '}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {' '}
            <div>
              {' '}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {' '}
                Email Address{' '}
              </label>{' '}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />{' '}
            </div>{' '}
            <div>
              {' '}
              <div className="flex justify-between mb-2">
                {' '}
                <label className="block text-sm font-medium text-gray-700">
                  {' '}
                  Password{' '}
                </label>{' '}
                <Link
                  to="/forgot-password"
                  className="text-sm text-emerald-600 hover:text-emerald-700"
                >
                  {' '}
                  Forgot Password?{' '}
                </Link>{' '}
              </div>{' '}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />{' '}
            </div>{' '}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {' '}
              {loading ? 'Signing In...' : 'Sign In'}{' '}
            </button>{' '}
          </form>{' '}
          <div className="flex items-center gap-4 my-8">
            {' '}
            <div className="flex-1 h-px bg-gray-300"></div>{' '}
            <span className="text-gray-500 text-sm">OR</span>{' '}
            <div className="flex-1 h-px bg-gray-300"></div>{' '}
          </div>{' '}
          <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            {' '}
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />{' '}
            Continue with Google{' '}
          </button>{' '}
          <p className="text-center mt-8 text-gray-600">
            {' '}
            Don't have an account?{' '}
            <Link
              to="/register"
              className="ml-2 text-emerald-600 font-semibold hover:text-emerald-700"
            >
              {' '}
              Sign Up{' '}
            </Link>{' '}
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
export default Login;
