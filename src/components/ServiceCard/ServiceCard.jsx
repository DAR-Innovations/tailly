import React from "react";
import "./serviceCard.css";

const ServiceCard = ({ info, onClose }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard-content">
        <div className="serviceCard-photo">
          <img src={info?.serviceImageURL} alt="pet" />
        </div>
        <div className="serviceCard-info">
          <div className="serviceCard-nameAge">{info?.serviceName}</div>

          <div className="serviceCard-adress info">
            <p className="serviceCard-adress-title title">Adress:</p>
            <p className="serviceCard-adress-body body">
              {info?.serviceAdress}
            </p>
          </div>

          <div className="serviceCard-description info">
            <p className="serviceCard-description-title title">Description:</p>
            <p className="serviceCard-description-body body">
              {info?.serviceDescription}
            </p>
          </div>
          <div className="serviceCard-contacts info">
            <p className="serviceCard-contacts-title title">Contacts:</p>
            <p className="serviceCard-contacts-body body">
              {info?.serviceContacts}
            </p>
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
