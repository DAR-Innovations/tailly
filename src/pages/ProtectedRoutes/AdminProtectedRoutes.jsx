import React from "react";
import { Outlet } from "react-router-dom";
import useIsAdmin from "../../components/Hooks/useIsAdmin";
import AboutPage from "../AboutPage/AboutPage";

const AdminProtectedRoutes = () => {
  const isAdmin = useIsAdmin();
  
  return isAdmin ? <Outlet /> : <AboutPage />;
};

export default AdminProtectedRoutes;
