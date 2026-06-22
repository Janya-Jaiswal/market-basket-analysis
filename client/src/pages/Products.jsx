import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories } from '../data/products';
import { fetchProducts } from '../app/slices/productSlice';
import { addToCart } from '../app/slices/cartSlice';
import toast from 'react-hot-toast';

const Products = () => {
  const dispatch = useDispatch();

  const { items, pagination, loading, error } = useSelector(
    (state) => state.products
  );
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Local state for UI controls
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortByPrice, setSortByPrice] = useState('');
  const [page, setPage] = useState(1);

  // Separate input typing from actual search execution
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products from backend whenever dependencies change
  useEffect(() => {
    let query = `?page=${page}&limit=12`;

    if (selectedCategory && selectedCategory !== 'All') {
      query += `&category=${selectedCategory}`;
    }

    if (sortByPrice) {
      query += `&sortByPrice=${sortByPrice}`;
    }

    if (searchQuery) {
      query += `&search=${searchQuery}`;
    }

    dispatch(fetchProducts(query));
  }, [dispatch, selectedCategory, sortByPrice, searchQuery, page]);

  // Reset to page 1 if user changes any filters
  useEffect(() => {
    setPage(1);
  }, [selectedCategory, sortByPrice, searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error('Please login to add items to your cart.');
      return;
    }
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 px-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md max-w-lg w-full text-center">
          <h3 className="text-xl font-bold text-red-800 mb-2">
            Failed to load products
          </h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => dispatch(fetchProducts(`?page=${page}&limit=12`))}
            className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen">
        <div className="bg-emerald-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Product Catalog</h1>
            <p className="mt-3 text-emerald-100">
              Explore products and discover shopping patterns with AI-powered
              Market Basket Analysis.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-5">Categories</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchInput(''); // Clear search when changing category
                      setSearchQuery('');
                    }}
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

            <div className="lg:col-span-3">
              {/* Search Bar with Button */}
              <form
                onSubmit={handleSearchSubmit}
                className="bg-white rounded-2xl shadow-md p-5 mb-6 flex gap-4"
              >
                <input
                  type="text"
                  placeholder="Search products in backend..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap"
                >
                  Search
                </button>
              </form>

              {/* Sorting and Count */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>

                <div className="flex items-center gap-4">
                  <select
                    value={sortByPrice}
                    onChange={(e) => setSortByPrice(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium cursor-pointer"
                  >
                    <option value="">Default Sort</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                  </select>

                  <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    {pagination?.totalItems || 0} Items Total
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              {!loading && (!items || items.length === 0) ? (
                <div className="bg-white rounded-2xl shadow-md p-10 text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-700">
                    No Products Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your category or search filters.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items?.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer flex flex-col h-full">
                        <div className="h-52 overflow-hidden bg-gray-100 flex-shrink-0 relative">
                          <img
                            src={
                              product.image ||
                              'https://via.placeholder.com/400x300?text=No+Image'
                            }
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.stock <= 0 && (
                            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
                              <span className="bg-red-600 text-white font-bold px-4 py-1 rounded-lg">
                                OUT OF STOCK
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full w-fit">
                            {product.category}
                          </span>

                          <h3
                            className="mt-3 text-lg font-bold truncate"
                            title={product.name}
                          >
                            {product.name}
                          </h3>

                          <p className="text-gray-500 flex-grow text-sm mt-1">
                            Stock Available: {product.stock}
                          </p>

                          <div className="flex justify-between items-center mt-5">
                            <span className="text-2xl font-bold text-emerald-600">
                              ₹{Number(product.price).toFixed(2)}
                            </span>

                            <button
                              onClick={(e) => handleAddToCart(e, product)}
                              disabled={product.stock <= 0}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl disabled:opacity-50 transition-colors"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Backend Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
                  <button
                    disabled={pagination.currentPage === 1 || loading}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Previous
                  </button>
                  <span className="font-semibold text-gray-700 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </span>
                  <button
                    disabled={
                      pagination.currentPage === pagination.totalPages ||
                      loading
                    }
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Next
                  </button>
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
