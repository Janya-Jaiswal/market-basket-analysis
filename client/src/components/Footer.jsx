const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-white">Market Basket AI</h2>

          <p className="text-slate-400 mt-4 max-w-2xl leading-7">
            AI-Powered Retail Analytics & Recommendation Platform helping
            retailers discover purchasing patterns, generate intelligent
            recommendations, analyze customer behavior, and make smarter
            business decisions through Market Basket Analysis and Generative AI.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">
          {/* Platform */}
          <div className="space-y-6">
            <h3 className="text-sm text-white font-semibold">Platform</h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Market Basket Analysis
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Association Rules
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Frequent Itemsets
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Product Recommendations
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  AI Shopping Assistant
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Analytics Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-sm text-white font-semibold">Resources</h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  API Reference
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  User Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Developer Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-sm text-white font-semibold">Company</h3>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Cookie Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm text-white font-semibold">Stay Connected</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition"
              >
                F
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition"
              >
                X
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-400 leading-6">
                Get updates on new analytics features, recommendation engine
                improvements, AI enhancements, and platform releases.
              </p>

              <button
                className="
                mt-5
                py-2.5
                px-5
                rounded-lg
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                text-sm
                font-medium
                transition
              "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-14 py-8 border-y border-slate-800">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-emerald-500">10K+</h4>

            <p className="text-slate-400 text-sm mt-2">Transactions Analyzed</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-emerald-500">500+</h4>

            <p className="text-slate-400 text-sm mt-2">Products Managed</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-emerald-500">95%</h4>

            <p className="text-slate-400 text-sm mt-2">
              Recommendation Accuracy
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-emerald-500">AI Powered</h4>

            <p className="text-slate-400 text-sm mt-2">Retail Insights</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Market Basket AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-emerald-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
