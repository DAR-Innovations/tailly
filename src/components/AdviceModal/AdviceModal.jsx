import React from "react";
import "./adviceModal.css";

const AdviceModal = ({ isActive, setIsActive }) => {
  function handleModal() {
    setIsActive(!isActive);
  }

  return (
    <div className={isActive ? "activeAdviceModal" : "adviceModal"}>
      <div className="adviceModal-content" onClick={e => e.stopPropagation()}>
        <div className="adviceModal-title">How to train a dog correctly</div>
        <div className="adviceModal-body">
          If you're wondering how to train a dog with a specific behavior, one
          of the most effective If you're wondering how to train a dog with a
          specific behavior, one of the most effective...
        </div>
        <div className="adviceModal-btn" onClick={handleModal}>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdviceModal;
