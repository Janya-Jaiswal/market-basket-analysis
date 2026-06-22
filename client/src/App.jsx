import AllRoutes from './appRoutes/AllRoutes.jsx';
import Loader from './components/Loader';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Loader />
      {/* 2. ADD THE TOASTER HERE */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          success: {
            style: { background: '#059669', color: 'white' }, // Emerald-600
            iconTheme: { primary: 'white', secondary: '#059669' },
          },
          error: {
            style: { background: '#DC2626', color: 'white' }, // Red-600
          },
        }}
      />
      <AllRoutes />
    </>
  );
}

export default App;
