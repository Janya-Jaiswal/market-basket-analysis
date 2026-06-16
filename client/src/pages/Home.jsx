import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home=()=>{
    return(
        <>
        <Navbar/>
        <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered Retail Analytics
              </span>

              <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
                Transform Retail Data Into
                <span className="text-emerald-600">
                  {" "}Actionable Insights
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Discover customer buying patterns, generate product
                recommendations, analyze transactions, and leverage
                Generative AI to improve retail decision-making.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
                  View Demo
                </button>
              </div>

              <div className="mt-10 flex gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    10K+
                  </h3>
                  <p className="text-gray-500">
                    Transactions Analyzed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    500+
                  </h3>
                  <p className="text-gray-500">
                    Products
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    95%
                  </h3>
                  <p className="text-gray-500">
                    Recommendation Accuracy
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

                <div className="flex justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">
                    Revenue Analytics
                  </h3>

                  <span className="text-emerald-600 font-semibold">
                    +18.2%
                  </span>
                </div>

                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  Dashboard Preview
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Everything Retailers Need
            </h2>

            <p className="text-gray-600 mt-4">
              Powerful analytics, recommendations, and AI assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-semibold text-xl mb-3">
                Market Basket Analysis
              </h3>

              <p className="text-gray-600">
                Discover products frequently purchased together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-semibold text-xl mb-3">
                AI Recommendations
              </h3>

              <p className="text-gray-600">
                Generate personalized product suggestions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-semibold text-xl mb-3">
                Analytics Dashboard
              </h3>

              <p className="text-gray-600">
                Visualize trends using charts and reports.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-semibold text-xl mb-3">
                AI Shopping Assistant
              </h3>

              <p className="text-gray-600">
                Gemini-powered conversational recommendations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>

              <h3 className="mt-4 font-semibold">
                Upload Transactions
              </h3>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>

              <h3 className="mt-4 font-semibold">
                Train MBA Models
              </h3>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>

              <h3 className="mt-4 font-semibold">
                Generate Rules
              </h3>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>

              <h3 className="mt-4 font-semibold">
                Get AI Insights
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-emerald-600 rounded-3xl text-center py-16 px-8">

            <h2 className="text-4xl font-bold text-white">
              Ready to Unlock Retail Intelligence?
            </h2>

            <p className="text-emerald-100 mt-4">
              Start analyzing customer purchasing behavior today.
            </p>

            <button className="mt-8 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold">
              Get Started Free
            </button>

          </div>
        </div>
      </section>
        <Footer/>
        </>
    )
}
export default Home;