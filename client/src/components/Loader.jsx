import { useSelector } from 'react-redux';

const Loader = () => {
  // Listen to all loading states across your Redux store
  const isAuthLoading = useSelector((state) => state.auth?.loading);
  const isProductsLoading = useSelector((state) => state.products?.loading);
  const isCartLoading = useSelector((state) => state.cart?.loading);
  const isUiLoading = useSelector((state) => state.ui?.loading);

  // If ANY of these are true, the app is loading something
  const isLoading =
    isAuthLoading || isProductsLoading || isCartLoading || isUiLoading;

  // If nothing is loading, render nothing (invisible)
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm pointer-events-auto transition-opacity duration-300">
      {/* Outer spinning ring */}
      <div className="relative flex items-center justify-center w-20 h-20">
        <div className="absolute w-full h-full border-4 border-blue-200 rounded-full"></div>
        {/* Inner spinning ring */}
        <div className="absolute w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-blue-600 font-bold text-lg tracking-widest animate-pulse">
        LOADING...
      </p>
    </div>
  );
};

export default Loader;
