import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { userPetsCollectionRef } from "../FirebaseCollections/userDataCollection";

const useFetchPetsData = () => {
  const [petsData, setPetsData] = useState(null);

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(userPetsCollectionRef);
      setPetsData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getData();
  }, []);

  return petsData;
};

export default useFetchPetsData;
