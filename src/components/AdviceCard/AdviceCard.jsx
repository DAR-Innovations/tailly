import React, { useState } from "react";
import "./adviceCardStyle.css";
import AdviceModal from "../AdviceModal/AdviceModal";

const AdviceCard = ({ info }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  function showModal() {
    setIsModalActive(!isModalActive);
  }

  return (
    <div className="advice-item" onClick={showModal}>
      <div className="advice-item-image">
        <img src={info.adviceImageUrl} alt="advice" />
      </div>

      <div className="advice-item-text">
        <div className="advice-item-title">{info.adviceTitle}</div>

        <div className="advice-item-body">{info.adviceShortBody}</div>
      </div>

      <AdviceModal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        fullBody={info.adviceFullBody}
        title={info.adviceTitle}
      />
    </div>
  );
};

export default AdviceCard;
