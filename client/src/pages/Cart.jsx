import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchCart, updateCartItem, clearCart } from '../app/slices/cartSlice';
import { fetchProducts } from '../app/slices/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: cartItems, loading: cartLoading } = useSelector(
    (state) => state.cart
  );
  const { items: productItems, loading: productsLoading } = useSelector(
    (state) => state.products
  );
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Fetch user's cart
    dispatch(fetchCart());

    // We need the product details (names, prices, images) to display the cart.
    // If the products aren't loaded in Redux yet, fetch them.
    if (!productItems || productItems.length === 0) {
      dispatch(fetchProducts('?limit=100')); // Fetching a larger limit to ensure we match cart items
    }
  }, [dispatch, isAuthenticated, navigate, productItems.length]);

  // Handle updating item quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    // If newQuantity is 0, the backend updateCartItemQuantityService will remove it
    dispatch(updateCartItem({ productId, quantity: newQuantity }));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      dispatch(clearCart());
    }
  };

  // Join Cart items with Product details for UI display
  const populatedCart = cartItems.map((cartItem) => {
    const productDetail = productItems.find((p) => p.id === cartItem.productId);
    return {
      ...cartItem,
      product: productDetail || {
        name: 'Loading...',
        price: 0,
        image: '',
        stock: 0,
      },
    };
  });

  // Calculate Totals
  const subtotal = populatedCart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% placeholder tax
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
  const grandTotal = subtotal + tax + shipping;

  // Empty State UI
  if (!cartLoading && cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="bg-slate-50 min-h-[75vh] flex flex-col items-center justify-center px-4">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-emerald-600"
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
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8 text-center max-w-md">
            Looks like you haven't added anything to your cart yet. Explore our
            products and find something you love.
          </p>
          <Link
            to="/products"
            className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            Shopping Cart
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Cart Items List */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Cart Header */}
                <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 bg-gray-50/50 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-gray-100">
                  {populatedCart.map((item) => (
                    <div
                      key={item.productId}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 items-center"
                    >
                      {/* Product Details (Image + Name) */}
                      <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                        <Link
                          to={`/product/${item.productId}`}
                          className="shrink-0"
                        >
                          <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden">
                            <img
                              src={
                                item.product.image ||
                                'https://via.placeholder.com/150'
                              }
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                        <div className="flex flex-col">
                          <Link
                            to={`/product/${item.productId}`}
                            className="font-bold text-gray-900 hover:text-emerald-600 transition truncate"
                          >
                            {item.product.name}
                          </Link>
                          <span className="text-gray-500 text-sm mt-1">
                            ₹{Number(item.product.price).toFixed(2)} / each
                          </span>

                          {/* Mobile Remove Button */}
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.productId, 0)
                            }
                            className="text-red-500 text-sm font-medium text-left mt-2 sm:hidden"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center items-center">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            className="px-3 py-1.5 text-gray-600 hover:text-emerald-600 hover:bg-gray-100 rounded-l-lg transition font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold text-gray-900 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            disabled={item.quantity >= item.product.stock}
                            className="px-3 py-1.5 text-gray-600 hover:text-emerald-600 hover:bg-gray-100 rounded-r-lg transition disabled:opacity-50 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Item Total Price & Desktop Remove */}
                      <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-end items-center gap-4">
                        <span className="font-bold text-gray-900 sm:hidden">
                          Total:
                        </span>
                        <div className="flex flex-col items-end">
                          <span className="font-extrabold text-emerald-600 text-lg">
                            ₹{(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.productId, 0)
                            }
                            className="hidden sm:block text-red-500 hover:text-red-700 text-xs font-semibold mt-1 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Footer Actions */}
                <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                  <Link
                    to="/products"
                    className="text-emerald-600 font-semibold hover:text-emerald-800 transition"
                  >
                    &larr; Continue Shopping
                  </Link>
                  <button
                    onClick={handleClearCart}
                    className="text-gray-500 hover:text-red-600 font-semibold text-sm transition"
                  >
                    Clear Entire Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ₹{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-semibold text-gray-900">
                      ₹{tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    {shipping === 0 ? (
                      <span className="font-bold text-emerald-600 uppercase text-sm tracking-wide bg-emerald-50 px-2 py-0.5 rounded">
                        Free
                      </span>
                    ) : (
                      <span className="font-semibold text-gray-900">
                        ₹{shipping.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-3xl font-extrabold text-emerald-600">
                      ₹{grandTotal.toFixed(2)}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400 mt-2 text-right">
                      Add ₹{(500 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                <button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={() => alert('Checkout functionality coming next!')}
                >
                  Proceed to Checkout
                </button>

                <div className="mt-6 flex justify-center gap-4 opacity-50">
                  {/* Dummy Payment Icons just for UI styling */}
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
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

export default Cart;
