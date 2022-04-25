import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../../firebase/firebase.config";
import { userPetsCollectionRef } from "../../FirebaseCollections/userDataCollection";

const handlePetDataSubmit = async (
  petAge,
  petContacts,
  petDescription,
  petLastSeen,
  petName,
  uid,
  petLocation,
  petImageURL,
  petColor
) => {
  try {
    const coordinates = petLocation.split(",");
    addDoc(userPetsCollectionRef, {
      petAge: petAge,
      petContacts: petContacts,
      petDescription: petDescription,
      petLastSeen: petLastSeen,
      petLatitude: coordinates[0],
      petLongitude: coordinates[1],
      petName: petName,
      petImageURL: petImageURL,
      petColor: petColor,
      uid: uid,
    });

    alert("Successfully added to database");
  } catch (error) {
    console.log(error);
  }
};

const deletePetDataFromDB = async (id, petImageName) => {
  try {
    const imageStoragePath = `${process.env.REACT_APP_PETS_IMAGE_FOLDER}/${petImageName}`;
    const imageFileRef = ref(storage, imageStoragePath);
    await deleteObject(imageFileRef);

    const petDoc = doc(db, process.env.REACT_APP_FIREBASE_HANDLE_PETS_DATA, id);
    await deleteDoc(petDoc);
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

export { handlePetDataSubmit, deleteHandledPetData, deletePetDataFromDB };
