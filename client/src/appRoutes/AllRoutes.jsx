import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Products from '../pages/Products.jsx';
import ProductDetails from '../pages/ProductDetails.jsx';
import Admin from '../admin/Admin.jsx';
import Cart from "../pages/Cart";
import AdminDashboard from '../pages/AdminDashboard.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/products',
    Component: Products,
  },
  {
    path: '/products/:id',
    Component: ProductDetails,
  },
  {
    path: '/admin',
    Component: Admin,
  },
  {
    path: '/cart',
    Component: Cart,
  },
  {
    path: '/adminDashboard',
    Component: AdminDashboard,
  },
]);
