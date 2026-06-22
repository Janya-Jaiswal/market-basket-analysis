import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  fetchProductById,
  clearSingleProduct,
} from '../app/slices/productSlice';
import { addToCart } from '../app/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleProduct, error } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
    // Cleanup function to clear the product when leaving the page
    return () => {
      dispatch(clearSingleProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to your cart.');
      navigate('/login');
      return;
    }
    dispatch(addToCart({ productId: id, quantity }));
  };

  const incrementQuantity = () => {
    if (quantity < (singleProduct?.stock || 1)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-[70vh] bg-slate-50 px-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Product Not Found
            </h3>
            <p className="text-red-600 mb-6">{error}</p>
            <Link
              to="/products"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Prevent rendering empty skeleton if loading (Global Loader handles the spin)
  if (!singleProduct) return null;

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm font-medium text-gray-500 mb-8">
            <Link to="/" className="hover:text-emerald-600 transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-emerald-600 transition">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{singleProduct.category}</span>
          </nav>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12">
              {/* Product Image */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center aspect-square relative">
                <img
                  src={
                    singleProduct.image ||
                    'https://via.placeholder.com/600x600?text=No+Image'
                  }
                  alt={singleProduct.name}
                  className="w-full h-full object-cover"
                />
                {singleProduct.stock <= 0 && (
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="bg-red-600 text-white font-bold text-xl px-6 py-2 rounded-xl transform -rotate-12 shadow-xl">
                      OUT OF STOCK
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full w-fit mb-4 uppercase tracking-wider">
                  {singleProduct.category}
                </span>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {singleProduct.name}
                </h1>

                <div className="text-3xl font-extrabold text-emerald-600 mb-6">
                  ₹{Number(singleProduct.price).toFixed(2)}
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {singleProduct.description ||
                    'No detailed description provided for this product.'}
                </p>

                <div className="space-y-6 border-t border-gray-100 pt-8">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-semibold">
                      Availability:
                    </span>
                    {singleProduct.stock > 0 ? (
                      <span className="text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-lg">
                        In Stock ({singleProduct.stock} units)
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium bg-red-50 px-3 py-1 rounded-lg">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Quantity & Add to Cart Controls */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl w-fit">
                      <button
                        onClick={decrementQuantity}
                        disabled={singleProduct.stock <= 0 || quantity <= 1}
                        className="px-5 py-3 text-gray-600 hover:text-emerald-600 hover:bg-gray-100 rounded-l-xl transition disabled:opacity-50 font-bold"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-bold text-gray-900">
                        {quantity}
                      </span>
                      <button
                        onClick={incrementQuantity}
                        disabled={
                          singleProduct.stock <= 0 ||
                          quantity >= singleProduct.stock
                        }
                        className="px-5 py-3 text-gray-600 hover:text-emerald-600 hover:bg-gray-100 rounded-r-xl transition disabled:opacity-50 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={singleProduct.stock <= 0}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
