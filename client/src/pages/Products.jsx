import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import { Link } from 'react-router';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-emerald-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Product Catalog</h1>

            <p className="mt-3 text-emerald-100">
              Explore products and discover shopping patterns with AI-powered
              Market Basket Analysis.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-5">Categories</h2>

              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition font-medium
                      
                      ${
                        selectedCategory === category
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 hover:bg-emerald-50 text-gray-700'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              {/* Product Count */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>

                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  {filteredProducts.length} Items
                </span>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
                      <div className="h-52 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                          {product.category}
                        </span>

                        <h3 className="mt-3 text-lg font-bold">
                          {product.name}
                        </h3>

                        <p className="text-gray-500">
                          Stock Available: {product.stock}
                        </p>

                        <div className="flex justify-between items-center mt-5">
                          <span className="text-2xl font-bold text-emerald-600">
                            ₹{product.price}
                          </span>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              alert(`${product.name} added to cart`);
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-700">
                    No Products Found
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Try another category or search keyword.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
