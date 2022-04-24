import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUID from "../Hooks/useUID";
import { petDataSubmit } from "./petDataFieldsMethods";
import "./petDataStyle.css";

const PetDataFields = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();
  const lastSeenRef = useRef();
  const contactsRef = useRef();
  const descripRef = useRef();
  const uid = useUID();
  const pageNavigation = useNavigate();

  function addDataToDB() {
    petDataSubmit(
      ageRef.current.value,
      contactsRef.current.value,
      descripRef.current.value,
      lastSeenRef.current.value,
      nameRef.current.value,
      uid
    );
    pageNavigation("../map");
  }

  return (
    <div className="petData-fields">
      <div className="petData-inputs">
        <input type="text" placeholder="Pet name" ref={nameRef} />
        <input type="text" placeholder="Pet age" ref={ageRef} />
        <input type="text" placeholder="Pet color" ref={colorRef} />
        <input type="text" placeholder="Last seen" ref={lastSeenRef} />
        <input type="text" placeholder="Owner contacts" ref={contactsRef} />
        <input
          type="text"
          placeholder="Additional description"
          className="additional"
          ref={descripRef}
        />
      </div>

      <div className="petData-btn">
        <button onClick={addDataToDB}>Create</button>
      </div>
    </div>
  );
};

export default PetDataFields;
