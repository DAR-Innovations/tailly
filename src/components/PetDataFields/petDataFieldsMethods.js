import { addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase/firebase.config";
import { petsDataHandleCollectionRef } from "../FirebaseCollections/userDataCollection";

const petDataSubmit = async (
  petAge,
  petContacts,
  petDescription,
  petLastSeen,
  petName,
  uid,
  imageFile
) => {
  const hashedImageName = imageFile.name + v4();
  const imageRef = ref(
    storage,
    `${process.env.REACT_APP_PETS_IMAGE_FOLDER}/${hashedImageName}`
  );
  await uploadBytes(imageRef, imageFile)
    .then(() => {
      getDownloadURL(imageRef)
        .then(url => {
          addDoc(petsDataHandleCollectionRef, {
            petAge: petAge,
            petContacts: petContacts,
            petDescription: petDescription,
            petLastSeen: petLastSeen,
            petName: petName,
            petImageURL: url,
            petImageName: hashedImageName,
            uid: uid,
          });
          alert("The operation completed successfully");
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};

export { petDataSubmit };
