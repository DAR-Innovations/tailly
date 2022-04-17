import React from "react";
import PetDataFields from "../../components/PetDataFields/PetDataFields";
import "./petDataStyle.css";

const PetDataPage = () => {
  return (
    <div className="petData">
      <div className="petData-content">
        <div className="petData-title">
          Fill out all necessary information of your pet
        </div>

        <PetDataFields />
      </div>
    </div>
  );
};

export default PetDataPage;
