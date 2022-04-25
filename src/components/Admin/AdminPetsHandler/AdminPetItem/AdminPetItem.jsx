import React, { useState } from "react";
import { deletePetDataFromDB } from "../adminPetsDataHandlerService";
import AdminPetsHandlerModal from "../AdminPetsHandleModal/AdminPetsHandlerModal";

const AdminPetItem = ({ data }) => {
  const [isPetModalActive, setIsPetModalActive] = useState(false);

  function handleModal() {
    setIsPetModalActive(!isPetModalActive);
  }

  async function deletePetData() {
    // eslint-disable-next-line no-restricted-globals
    const isPermitted = confirm(
      "Are you sure you want to delete this thing from the database?"
    );
    if (isPermitted) {
      deletePetDataFromDB(data?.id, data?.petImageName)
        .then(() => alert("Successfully deleted from database"))
        .then(() => window.location.reload(true));
    }
  }

  return (
    <div className="adminPets-item">
      <div className="adminPets-body">
        {data?.petLastSeen}, {data?.petName}
      </div>
      <div className="adminPets-handle">
        <button className="adminPets-handle-btn" onClick={handleModal}>
          Handle
        </button>
        <button className="adminPets-handle-delete" onClick={deletePetData}>
          Delete
        </button>
      </div>

      <AdminPetsHandlerModal
        isActive={isPetModalActive}
        setIsActive={setIsPetModalActive}
        data={data}
      />
    </div>
  );
};

export default AdminPetItem;
