import React from "react";
import "./adviceModal.css";

const AdviceModal = ({ isActive, setIsActive, fullBody, title }) => {
  function handleModal() {
    setIsActive(!isActive);
  }

  return (
    <div className={isActive ? "activeAdviceModal" : "adviceModal"}>
      <div className="adviceModal-content" onClick={e => e.stopPropagation()}>
        <div className="adviceModal-title">{title}</div>
        <div className="adviceModal-body">{fullBody}</div>
        <div className="adviceModal-btn" onClick={handleModal}>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdviceModal;
