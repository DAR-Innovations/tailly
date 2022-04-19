import React from "react";
import "./profileModal.css";

const ProfileModal = ({ isActive, setActive }) => {
  return (
    <div className={isActive ? "profileModalActive" : "profileModal"}>
      <div className="profileModal-content">
        <div className="profileModal-name">Alexander Ivanov</div>
        <div className="profileModal-logout">
          <button onClick={() => setActive(!isActive)}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
