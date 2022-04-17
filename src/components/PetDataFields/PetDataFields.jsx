import React from "react";
import "./petDataStyle.css";

const PetDataFields = () => {
  return (
    <div className="petData-fields">
      <div className="petData-inputs">
        <input type="text" placeholder="Pet name" />
        <input type="text" placeholder="Pet age" />
        <input type="text" placeholder="Pet color" />
        <input type="text" placeholder="Last seen" />
        <input
          type="text"
          placeholder="Additional description"
          className="additional"
        />
      </div>

      <div className="petData-btn">
        <button>Create</button>
      </div>
    </div>
  );
};

export default PetDataFields;
