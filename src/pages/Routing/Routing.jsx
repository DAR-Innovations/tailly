import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import AdvicePage from "../AdvicePage/AdvicePage";
import FacilitiesPage from "../FacilitiesPage/FacilitiesPage";
import MapPage from "../MapPage/MapPage";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import PetDataPage from "../PetDataPage/PetDataPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/advice" element={<AdvicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/leave-pet-data" element={<PetDataPage />} />
    </Routes>
  );
};

export default Routing;
