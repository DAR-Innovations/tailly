import React from "react";
import "./serviceCard.css";
import TestPhoto from "../../assets/serviceTestPhoto.png";

const ServiceCard = ({ info, onClose }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard-content">
        <div className="serviceCard-photo">
          <img src={TestPhoto} alt="pet" />
        </div>
        <div className="serviceCard-info">
          <div className="serviceCard-nameAge">{info?.name}</div>

          <div className="serviceCard-adress info">
            <p className="serviceCard-adress-title title">Adress:</p>
            <p className="serviceCard-adress-body body">{info?.adress}</p>
          </div>

          <div className="serviceCard-description info">
            <p className="serviceCard-description-title title">Description:</p>
            <p className="serviceCard-description-body body">
              {info?.description}
            </p>
          </div>
          <div className="serviceCard-contacts info">
            <p className="serviceCard-contacts-title title">Contacts:</p>
            <p className="serviceCard-contacts-body body">{info?.contacts}</p>
          </div>
        </div>
        <div className="serviceCard-btn">
          <button onClick={() => onClose({})}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
