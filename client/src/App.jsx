import { RouterProvider } from 'react-router';
import { router } from './appRoutes/AllRoutes.jsx';
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>,
      <Route path="/products/:id" element={<ProductDetails />} />
    </>
  );
}

export default App;
