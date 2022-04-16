import React from "react";
import "./petCard.css";
import TestPhoto from '../../assets/petTestPhoto.png'

const PetCard = () => {
  return (
    <div className="petCard">
      <div className="petCard-content">
        <div className="petCard-photo">
            <img src={TestPhoto} alt="pet" />
        </div>
        <div className="petCard-info">
          <div className="petCard-nameAge">Robert, 5 years old </div>

          <div className="petCard-adress info">
            <p className="petCard-adress-title title">Last seen:</p>
            <p className="petCard-adress-body body">Pushkina 33, near supermarket </p>
          </div>

          <div className="petCard-description info">
            <p className="petCard-description-title title">Description:</p>
            <p className="petCard-description-body body">
              Brown colored, likes to play outside
            </p>
          </div>
          <div className="petCard-contacts info">
            <p className="petCard-contacts-title title">Owner contacts:</p>
            <p className="petCard-contacts-body body">+77053356653 </p>
          </div>
        </div>
        <div className="petCard-btn">
            <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
