import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import AdvicePage from "../AdvicePage/AdvicePage";
import FacilitiesPage from "../FacilitiesPage/FacilitiesPage";
import MapPage from "../MapPage/MapPage";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import PetDataPage from "../PetDataPage/PetDataPage";
import AdminPage from "../AdminPage/AdminPage";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import AdminProtectedRoutes from "../ProtectedRoutes/AdminProtectedRoutes";

const Routing = () => {
  return (
    <Routes>
      {/* Only if user logged in */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/leave-pet-data" element={<PetDataPage />} />
      </Route>

      {/* Admin routes */}
      <Route element={<AdminProtectedRoutes />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* User without account routes */}
      <Route path="/" element={<AboutPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/advice" element={<AdvicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default Routing;
