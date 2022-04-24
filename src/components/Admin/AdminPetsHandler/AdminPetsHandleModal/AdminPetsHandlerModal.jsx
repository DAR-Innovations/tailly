import React, { useRef } from "react";
import {
  deleteHandledPetData,
  handlePetDataSubmit,
} from "../adminPetsDataHandlerService";
import "./adminHandleModal.css";

const AdminPetsHandlerModal = ({ isActive, setIsActive, data }) => {
  const petLocationRef = useRef();

  function handleModal() {
    setIsActive(!isActive);
  }

  function handleContentClick(e) {
    e.stopPropagation();
  }

  function handleClassName() {
    return isActive ? "activeAdminModal" : "adminHandleModal";
  }

  async function addToDB() {
    await handlePetDataSubmit(
      data?.petAge,
      data?.petContacts,
      data?.petDescription,
      data?.petLastSeen,
      data?.petName,
      data?.uid,
      petLocationRef.current.value
    );

    await deleteHandledPetData(data?.id);

    window.location.reload(false);
  }

  return (
    <div className={handleClassName()} onClick={handleModal}>
      <div className="adminHandleModal-content" onClick={handleContentClick}>
        <div className="adminHandleModal-title">Pet information</div>

        <div className="adminHandleModal-pet-info">
          <div className="adminHandleModal-pet-name">{data?.petName}</div>
          <div className="adminHandleModal-pet-adress">{data?.petLastSeen}</div>
        </div>

        <div className="adminHandleModal-location">
          <input
            type="text"
            placeholder="Latitude, longitude"
            ref={petLocationRef}
          />
        </div>

        <div className="adminHandleModal-btn">
          <button onClick={addToDB}>Handle</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPetsHandlerModal;
