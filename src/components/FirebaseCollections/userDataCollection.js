import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const usersDataCollectionRef = collection(
  db,
  process.env.REACT_APP_FIREBASE_USERSDB
);

const adviceCollectionRef = collection(
  db,
  process.env.REACT_APP_FIREBASE_ADVICEDB
);

export { usersDataCollectionRef, adviceCollectionRef };
