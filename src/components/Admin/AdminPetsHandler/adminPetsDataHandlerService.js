import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import { userPetsCollectionRef } from "../../FirebaseCollections/userDataCollection";

const handlePetDataSubmit = async (
  petAge,
  petContacts,
  petDescription,
  petLastSeen,
  petName,
  uid,
  petLocation
) => {
  try {
    const coordinates = petLocation.split(" ");
    addDoc(userPetsCollectionRef, {
      petAge: petAge,
      petContacts: petContacts,
      petDescription: petDescription,
      petLastSeen: petLastSeen,
      petLatitude: coordinates[0],
      petLongitude: coordinates[1],
      petName: petName,
      uid: uid,
    });

    alert("Successfully added to database");
  } catch (error) {
    console.log(error);
  }
};

const deleteHandledPetData = async id => {
  try {
    const petDoc = doc(db, process.env.REACT_APP_FIREBASE_HANDLE_PETS_DATA, id);
    await deleteDoc(petDoc);
  } catch (error) {
    console.log(error);
  }
};

export { handlePetDataSubmit, deleteHandledPetData };
