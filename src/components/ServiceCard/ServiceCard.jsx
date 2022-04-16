import React from "react";
import "./serviceCard.css";
import TestPhoto from "../../assets/serviceTestPhoto.png";

const ServiceCard = () => {
  return (
    <div className="serviceCard">
      <div className="serviceCard-content">
        <div className="serviceCard-photo">
          <img src={TestPhoto} alt="pet" />
        </div>
        <div className="serviceCard-info">
          <div className="serviceCard-nameAge">Pet Supermarket</div>

          <div className="serviceCard-adress info">
            <p className="serviceCard-adress-title title">Adress:</p>
            <p className="serviceCard-adress-body body">
              Pushkina 33, near supermarket
            </p>
          </div>

          <div className="serviceCard-description info">
            <p className="serviceCard-description-title title">Description:</p>
            <p className="serviceCard-description-body body">
              Brown colored, likes to play outside
            </p>
          </div>
          <div className="serviceCard-contacts info">
            <p className="serviceCard-contacts-title title">Contacts:</p>
            <p className="serviceCard-contacts-body body">+77053356653 </p>
          </div>
        </div>
        <div className="serviceCard-btn">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
