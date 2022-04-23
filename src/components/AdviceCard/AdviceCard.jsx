import React, { useState } from "react";
import "./adviceCardStyle.css";
import AdviceImage from "../../assets/adviceImage.png";
import AdviceModal from "../AdviceModal/AdviceModal";

const AdviceCard = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  function showModal() {
    setIsModalActive(!isModalActive);
  }

  return (
    <div className="advice-item" onClick={showModal}>
      <div className="advice-item-image">
        <img src={AdviceImage} alt="advice" />
      </div>

      <div className="advice-item-text">
        <div className="advice-item-title">How to train a dog correctly</div>

        <div className="advice-item-body">
          If you're wondering how to train a dog with a specific behavior, one
          of the most effective 
        </div>
      </div>

      <AdviceModal isActive={isModalActive} setIsActive={setIsModalActive} />
    </div>
  );
};

export default AdviceCard;
