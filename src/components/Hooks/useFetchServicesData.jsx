import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { servicesCollectionRef } from "../FirebaseCollections/userDataCollection";

const useFetchServicesData = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(servicesCollectionRef);
      setServicesData(
        snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      );
    }

    getData();
  }, []);

  return servicesData;
};

export default useFetchServicesData;
