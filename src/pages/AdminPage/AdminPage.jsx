import React from "react";
import AdminAdviceFields from "../../components/Admin/AdminAdviceFields/AdminAdviceFields";
import AdminServiceFields from "../../components/Admin/AdminServicesFields/AdminServiceFields";
import "./adminPage.css";

const AdminPage = () => {
  return (
    <div className="adminPage">
      <div className="adminPage-content">
        <div className="adminPage-title">Admin page</div>
        <AdminAdviceFields />
        <AdminServiceFields />
      </div>
    </div>
  );
};

export default AdminPage;
