import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../app/slices/uiSlice.js';

export const GlobalLoader = () => {
  const loading = useSelector((state) => state.ui.loading);
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-auto">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export const GlobalNotification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) return null;

  const isSuccess = notification.type === 'success';

  return (
    <div className="fixed top-5 right-5 z-50 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto overflow-hidden border-l-4 border-blue-500 animate-slide-in">
      <div
        className={`p-4 flex items-center justify-between border-l-4 ${isSuccess ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}
      >
        <p
          className={`text-sm font-medium ${isSuccess ? 'text-green-800' : 'text-red-800'}`}
        >
          {notification.message}
        </p>
        <button
          onClick={() => dispatch(clearNotification())}
          className="text-gray-400 hover:text-gray-600 font-bold ml-4"
        >
          ×
        </button>
      </div>
    </div>
  );
};
