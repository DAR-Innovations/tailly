import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { petsDataHandleCollectionRef } from "../FirebaseCollections/userDataCollection";

const useFetchPetsHandleData = () => {
  const [petsHandleData, setPetsHandleData] = useState(null);

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(petsDataHandleCollectionRef);
      setPetsHandleData(
        snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      );
    }

    getData();
  }, []);
  
  return petsHandleData;
};

export default useFetchPetsHandleData;
