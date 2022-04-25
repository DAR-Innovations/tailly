import React, { useRef, useState } from "react";
import "./adminAdvice.css";
import { handleAdviceSubmit } from "./adminAdviceMethods";

const AdminAdviceFields = () => {
  const titleRef = useRef();
  const shortBodyRef = useRef();
  const fullBodyRef = useRef();
  const [imageFile, setImageFile] = useState(null);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  }

  async function addAdviceToDB() {
    await handleAdviceSubmit(imageFile, titleRef, shortBodyRef, fullBodyRef);
  }

  return (
    <div className="adminAdvice-fields">
      <div className="adminAdvice-title">Advice panel</div>
      <div className="adminAdvice-inputs">
        <input type="text" placeholder="Advice title" ref={titleRef} />
        <input type="text" placeholder="Advice short body" ref={shortBodyRef} />
        <input type="text" placeholder="Advice full body" ref={fullBodyRef} />
        <input type="file" onChange={handleImageChange} />
      </div>

      <div className="adminAdvice-btn">
        <button onClick={addAdviceToDB}>Create</button>
      </div>
    </div>
  );
};

export default AdminAdviceFields;
