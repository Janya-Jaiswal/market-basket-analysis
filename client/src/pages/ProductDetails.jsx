import React, { useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Main Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 grid lg:grid-cols-2 gap-10">

            {/* Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">

              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full w-fit">
                {product.category}
              </span>

              <h1 className="text-4xl font-bold mt-4">
                {product.name}
              </h1>

              <p className="text-emerald-600 text-4xl font-bold mt-4">
                ₹{product.price}
              </p>

              <p className="mt-4 text-gray-600">
                Stock Available:
                <span className="font-semibold ml-2">
                  {product.stock}
                </span>
              </p>

              <p className="mt-6 text-gray-600 leading-7">
                Premium quality {product.name.toLowerCase()}
                carefully selected for customers.
                Frequently purchased together with
                complementary products using
                Market Basket Analysis recommendations.
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="bg-slate-200 w-10 h-10 rounded-lg"
                >
                  -
                </button>

                <span className="text-xl font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="bg-slate-200 w-10 h-10 rounded-lg"
                >
                  +
                </button>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Add To Cart
                </button>

                <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-xl font-semibold">
                  Buy Now
                </button>

              </div>

            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold mb-6">
              Related Products
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-emerald-600 font-bold mt-2">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;