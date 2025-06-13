import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "@utils/auth";

const PublicRoutes = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoutes;
