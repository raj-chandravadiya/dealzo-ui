import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { PRIVATE_URLS, PUBLIC_URLS } from "./url";
import { lazy } from "react";

const AppRoutes = () => {
  const Login = lazy("@pages/Login.jsx");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          {PUBLIC_URLS.map((urls) => {
            return <Route path={urls.url} element={urls.element} />;
          })}
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          {PRIVATE_URLS.map((urls) => {
            return <Route path={urls.url} element={urls.element} />;
          })}
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
