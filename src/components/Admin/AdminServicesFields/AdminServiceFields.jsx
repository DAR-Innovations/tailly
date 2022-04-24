import React, { useRef, useState } from "react";
import "./adminService.css";
import { handleServiceSubmit } from "./adminServicesMethods";

const AdminServiceFields = () => {
  const nameRef = useRef();
  const adressRef = useRef();
  const contactsRef = useRef();
  const descripRef = useRef();
  const locationRef = useRef();

  const [imageFile, setImageFile] = useState(null);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  async function addAdviceToDB() {
    await handleServiceSubmit(
      nameRef,
      adressRef,
      descripRef,
      contactsRef,
      locationRef,
      imageFile
    );
  }

  return (
    <div className="adminAdvice-fields">
      <div className="adminAdvice-title">Services panel</div>
      <div className="adminAdvice-inputs">
        <input type="text" placeholder="Service name" ref={nameRef} />
        <input type="text" placeholder="Service adress" ref={adressRef} />
        <input type="text" placeholder="Service description" ref={descripRef} />
        <input type="text" placeholder="Service contacts" ref={contactsRef} />
        <input
          type="text"
          placeholder="Service location (latitued + longitude)"
          ref={locationRef}
        />
        <input type="file" onChange={handleImageChange} />
      </div>

      <div className="adminAdvice-btn">
        <button onClick={addAdviceToDB}>Create</button>
      </div>
    </div>
  );
};

export default AdminServiceFields;
