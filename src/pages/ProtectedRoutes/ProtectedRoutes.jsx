import React from "react";
import { Outlet } from "react-router-dom";
import useIsAuth from "../../components/Hooks/useIsAuth";
import AboutPage from "../AboutPage/AboutPage";

const ProtectedRoutes = () => {
  const isAuth = useIsAuth();
  return isAuth ? <Outlet /> : <AboutPage />;
};

export default ProtectedRoutes;
