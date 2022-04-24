import { addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/firebase.config";
import { servicesCollectionRef } from "../../FirebaseCollections/userDataCollection";
import { v4 } from "uuid";

export const handleServiceSubmit = async (
  nameRef,
  adressRef,
  descripRef,
  contactsRef,
  locationRef,
  imageFile
) => {
  const imageRef = ref(
    storage,
    `${process.env.REACT_APP_ADVICE_IMAGE_FOLDER}/${imageFile.name + v4()}`
  );
  await uploadBytes(imageRef, imageFile)
    .then(() => {
      getDownloadURL(imageRef)
        .then(url => {
          const locationValue = locationRef.current.value;
          const locationCoord = locationValue.split(",");
          addDoc(servicesCollectionRef, {
            serviceName: nameRef.current.value,
            serviceAdress: adressRef.current.value,
            serviceDescription: descripRef.current.value,
            serviceContacts: contactsRef.current.value,
            serviceLatitude: locationCoord[0],
            serviceLongitude: locationCoord[1],
            serviceImageURL: url,
          });
          alert("Successfully added to database");
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};
