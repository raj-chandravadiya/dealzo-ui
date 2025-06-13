import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "@utils/auth";

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
