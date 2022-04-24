import React from "react";
import useFetchPetsHandleData from "../../../Hooks/useFetchPetsHandleData";
import AdminPetItem from "../AdminPetItem/AdminPetItem";

const AdminPetsList = () => {
  const fetchedPetData = useFetchPetsHandleData();

  return (
    <div className="adminPets-list">
      {fetchedPetData?.map(data => (
        <AdminPetItem data={data} key={Date.now()} />
      ))}
    </div>
  );
};

export default AdminPetsList;
