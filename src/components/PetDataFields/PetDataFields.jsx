import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUID from "../Hooks/useUID";
import { petDataSubmit } from "./petDataFieldsMethods";
import "./petDataStyle.css";

const PetDataFields = () => {
  const [imageFile, setImageFile] = useState();
  const nameRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();
  const lastSeenRef = useRef();
  const contactsRef = useRef();
  const descripRef = useRef();
  const uid = useUID();
  const pageNavigation = useNavigate();

  async function addDataToDB() {
    petDataSubmit(
      colorRef.current.value,
      ageRef.current.value,
      contactsRef.current.value,
      descripRef.current.value,
      lastSeenRef.current.value,
      nameRef.current.value,
      uid,
      imageFile
    ).then(() => pageNavigation("../map"));
  }

  function handleImageFileChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  return (
    <div className="petData-fields">
      <div className="petData-inputs">
        <input type="text" placeholder="Pet name" ref={nameRef} />
        <input type="text" placeholder="Pet age" ref={ageRef} />
        <input type="text" placeholder="Pet color" ref={colorRef} />
        <input
          type="text"
          placeholder="Last location (address)"
          ref={lastSeenRef}
        />
        <input type="text" placeholder="Owner contacts" ref={contactsRef} />
        <input
          type="text"
          placeholder="Additional description"
          className="additional"
          ref={descripRef}
        />
        <input type="file" onChange={handleImageFileChange} />
      </div>

      <div className="petData-btn">
        <button onClick={addDataToDB}>Create</button>
      </div>
    </div>
  );
};

export default PetDataFields;
