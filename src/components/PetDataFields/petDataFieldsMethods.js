import { addDoc } from "firebase/firestore";
import { petsDataHandleCollectionRef } from "../FirebaseCollections/userDataCollection";

const petDataSubmit = async (
  petAge,
  petContacts,
  petDescription,
  petLastSeen,
  petName,
  uid
) => {
  try {
    addDoc(petsDataHandleCollectionRef, {
      petAge: petAge,
      petContacts: petContacts,
      petDescription: petDescription,
      petLastSeen: petLastSeen,
      petName: petName,
      uid: uid,
    });

    alert("The operation completed successfully");
  } catch (error) {
    console.log(error);
  }
};

export { petDataSubmit };
