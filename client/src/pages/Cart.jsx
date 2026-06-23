import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Milk",
      price: 60,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Bread",
      price: 40,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Butter",
      price: 120,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;

  const total = subtotal + shipping;

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen">
        
        {/* Hero Section */}
        <div className="bg-emerald-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold">
              Shopping Cart
            </h1>

            <p className="mt-3 text-emerald-100">
              Review your selected products before checkout.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10">

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-700">
                Your Cart is Empty
              </h2>

              <p className="mt-3 text-gray-500">
                Browse products and add items to your cart.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-5">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-40 h-40 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-emerald-600 font-semibold mt-2">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-5">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-10 h-10 bg-slate-100 rounded-lg text-lg font-bold"
                        >
                          -
                        </button>

                        <span className="font-semibold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-10 h-10 bg-emerald-600 text-white rounded-lg"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-5 text-red-500 hover:text-red-600 font-medium"
                      >
                        Remove Item
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500">
                        Total
                      </p>

                      <h3 className="text-2xl font-bold text-gray-800">
                        ₹{item.price * item.quantity}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">

                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">

                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Subtotal
                      </span>

                      <span className="font-semibold">
                        ₹{subtotal}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Shipping
                      </span>

                      <span className="font-semibold">
                        ₹{shipping}
                      </span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>

                      <span className="text-emerald-600">
                        ₹{total}
                      </span>
                    </div>
                  </div>

                  <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition">
                    Proceed to Checkout
                  </button>

                  <Link to="/products">
  <button className="w-full mt-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-xl font-semibold transition">
    Continue Shopping
  </button>
</Link>

                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;