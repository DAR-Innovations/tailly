import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { usersDataCollectionRef } from "../FirebaseCollections/userDataCollection";
import useIsAuth from "./useIsAuth";

const useFetchUserData = () => {
  const isAuth = useIsAuth();
  const [userData, setUserData] = useState(null);
  const [cookies] = useCookies();

  useEffect(() => {
    if (isAuth) {
      const { userAuthData } = cookies;
      const uid = userAuthData?.uid;

      async function getData() {
        const queryData = query(
          usersDataCollectionRef,
          where("uid", "==", uid)
        );

        const snapshot = await getDocs(queryData);
        setUserData(
          ...snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      }

      getData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userData || null;
};

export default useFetchUserData;
