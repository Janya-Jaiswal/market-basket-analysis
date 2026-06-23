import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <>
      <AdminSidebar />

      <div className="ml-72 min-h-screen bg-slate-50">

        {/* Header */}
        <div className="bg-white shadow-sm px-10 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor sales, customers and market basket insights.
            </p>
          </div>

          <div className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-medium">
            Welcome Admin 👋
          </div>
        </div>

        {/* Content */}
        <div className="p-8">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Total Revenue</p>
    <h2 className="text-3xl font-bold mt-2">₹2.4M</h2>
    <span className="text-green-600">+18%</span>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Orders</p>
    <h2 className="text-3xl font-bold mt-2">12,540</h2>
    <span className="text-green-600">+12%</span>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Customers</p>
    <h2 className="text-3xl font-bold mt-2">4,892</h2>
    <span className="text-green-600">+8%</span>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow">
    <p className="text-gray-500">Avg Basket Value</p>
    <h2 className="text-3xl font-bold mt-2">₹785</h2>
    <span className="text-green-600">+6%</span>
  </div>

</div>

          {/* MBA + AI Section */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            {/* Frequently Bought Together */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-5">
                Frequently Bought Together
              </h2>

              <div className="space-y-4">

                <div className="bg-emerald-50 p-4 rounded-xl">
                  <h3 className="font-semibold">
                    🥛 Milk + 🍞 Bread
                  </h3>

                  <p className="text-sm text-gray-600">
                    Support: 65%
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold">
                    ☕ Coffee + 🍪 Cookies
                  </h3>

                  <p className="text-sm text-gray-600">
                    Support: 52%
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl">
                  <h3 className="font-semibold">
                    🍝 Pasta + 🍅 Pasta Sauce
                  </h3>

                  <p className="text-sm text-gray-600">
                    Support: 48%
                  </p>
                </div>

              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white rounded-2xl shadow p-6 mt-8">
  <h2 className="text-2xl font-bold mb-5">
    AI Market Basket Insights
  </h2>

  <div className="space-y-4">

    <div className="bg-emerald-50 p-4 rounded-xl">
      <h3 className="font-semibold text-emerald-700">
        Strong Association
      </h3>
      <p>
        Customers buying Milk are 72% likely to buy Bread.
      </p>
    </div>

    <div className="bg-blue-50 p-4 rounded-xl">
      <h3 className="font-semibold text-blue-700">
        Cross-Selling Opportunity
      </h3>
      <p>
        Recommend Butter when Bread is added to cart.
      </p>
    </div>

    <div className="bg-purple-50 p-4 rounded-xl">
      <h3 className="font-semibold text-purple-700">
        Frequent Bundle
      </h3>
      <p>
        Milk + Bread + Eggs appears in 48% of transactions.
      </p>
    </div>

  </div>
            </div>

          </div>

          {/* Top Products + Low Stock */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            {/* Top Products */}
            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold mb-5">
                Top Selling Products
              </h2>

              <table className="w-full">

                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Sold</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b">
                    <td className="py-3">Milk</td>
                    <td>1200</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Bread</td>
                    <td>980</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Coffee</td>
                    <td>850</td>
                  </tr>

                  <tr>
                    <td className="py-3">Butter</td>
                    <td>810</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* Low Stock */}
            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-xl font-bold mb-5 text-red-500">
                Low Stock Alerts
              </h2>

              <div className="space-y-4">

                <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                  Mozzarella Cheese - 5 left
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                  Frozen Pizza - 8 left
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                  Honey - 10 left
                </div>

              </div>

            </div>

          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow p-6 mt-8">

            <h2 className="text-xl font-bold mb-5">
              Recent Orders
            </h2>

            <table className="w-full">

              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4">#ORD001</td>
                  <td>Janya</td>
                  <td>₹560</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Delivered
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">#ORD002</td>
                  <td>Rahul</td>
                  <td>₹420</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Processing
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4">#ORD003</td>
                  <td>Priya</td>
                  <td>₹860</td>
                  <td>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Shipped
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <button className="bg-emerald-600 text-white py-4 rounded-2xl hover:bg-emerald-700 transition font-semibold">
              + Add Product
            </button>

            <button className="bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition font-semibold">
              Generate MBA Report
            </button>

            <button className="bg-purple-600 text-white py-4 rounded-2xl hover:bg-purple-700 transition font-semibold">
              Export Analytics
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;