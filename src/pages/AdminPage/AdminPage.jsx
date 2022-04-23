import React from "react";
import AdminAdviceFields from "../../components/Admin/AdminAdviceFields/AdminAdviceFields";
import "./adminPage.css";

const AdminPage = () => {
  return (
    <div className="adminPage">
      <div className="adminPage-content">
        <div className="adminPage-title">Admin page</div>
        <AdminAdviceFields />
      </div>
    </div>
  );
};

export default AdminPage;
