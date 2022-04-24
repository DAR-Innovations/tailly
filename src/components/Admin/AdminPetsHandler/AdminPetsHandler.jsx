import React from "react";
import "./adminPets.css";
import AdminPetsList from "./AdminPetsList/AdminPetsList";

const AdminPetsHandler = () => {
  return (
    <div className="adminPets">
      <div className="adminPets-content">
        <div className="adminPets-title">Pets data handler</div>
        <AdminPetsList />
      </div>
    </div>
  );
};

export default AdminPetsHandler;
