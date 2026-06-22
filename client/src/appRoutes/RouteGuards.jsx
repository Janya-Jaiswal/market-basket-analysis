import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Blocks unauthenticated users from internal dashboard profiles
export const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Redirects logged-in accounts away from authentication access portals (Login / Register)
export const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// Restricts access exclusively to confirmed administrators
export const AdminRoute = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return isAuthenticated && user?.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};
