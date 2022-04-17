import React from "react";
import "./petCard.css";
import TestPhoto from "../../assets/petTestPhoto.png";

const PetCard = ({ info, onClose }) => {
  const nameAge = `${info?.name}, ${info?.age} years old`;
  const additionalDescript = `${info?.color}, ${info?.description}`;
  return (
    <div className="petCard">
      <div className="petCard-content">
        <div className="petCard-photo">
          <img src={TestPhoto} alt="pet" />
        </div>
        <div className="petCard-info">
          <div className="petCard-nameAge">{nameAge}</div>

          <div className="petCard-adress info">
            <p className="petCard-adress-title title">Last seen:</p>
            <p className="petCard-adress-body body">{info?.lastSeen}</p>
          </div>

          <div className="petCard-description info">
            <p className="petCard-description-title title">Description:</p>
            <p className="petCard-description-body body">
              {additionalDescript}
            </p>
          </div>
          <div className="petCard-contacts info">
            <p className="petCard-contacts-title title">Owner contacts:</p>
            <p className="petCard-contacts-body body">{info?.contacts}</p>
          </div>
        </div>
        <div className="petCard-btn">
          <button onClick={() => onClose({})}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
