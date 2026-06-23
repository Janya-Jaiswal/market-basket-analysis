import React from "react";
import { Link } from "react-router";

import {
  FaChartLine,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaWarehouse,
  FaRobot,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaChartPie,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="w-72 h-screen bg-slate-900 text-white fixed left-0 top-0 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-emerald-400">
          Market Basket AI
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6">

        <ul className="space-y-2 px-4">

          <li>
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaChartLine />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/products"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaBoxOpen />
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/admin/orders"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaShoppingCart />
              Orders
            </Link>
          </li>

          <li>
            <Link
              to="/admin/customers"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaUsers />
              Customers
            </Link>
          </li>

          <li>
            <Link
              to="/admin/inventory"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaWarehouse />
              Inventory
            </Link>
          </li>

          <li>
            <Link
              to="/admin/analytics"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaChartPie />
              Analytics
            </Link>
          </li>

          <li>
            <Link
              to="/admin/market-basket-analysis"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaChartLine />
              Market Basket Analysis
            </Link>
          </li>

          <li>
            <Link
              to="/admin/ai-insights"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaRobot />
              AI Insights
            </Link>
          </li>

          <li>
            <Link
              to="/admin/reports"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaFileAlt />
              Reports
            </Link>
          </li>

          <li>
            <Link
              to="/admin/settings"
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-emerald-600 transition"
            >
              <FaCog />
              Settings
            </Link>
          </li>

        </ul>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">

        <button className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition font-medium">
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminSidebar;