import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { adviceCollectionRef } from "../FirebaseCollections/userDataCollection";

const useFetchAdviceData = () => {
  const [adviceData, setAdviceData] = useState(null);

  useEffect(() => {
    async function getData() {
      const snapshot = await getDocs(adviceCollectionRef);
      setAdviceData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getData();
  }, []);

  return adviceData;
};

export default useFetchAdviceData;
