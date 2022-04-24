import { addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/firebase.config";
import { adviceCollectionRef } from "../../FirebaseCollections/userDataCollection";
import { v4 } from "uuid";

export const handleAdviceSubmit = async (
  imageFile,
  titleRef,
  shortBodyRef,
  fullBodyRef
) => {
  const imageRef = ref(
    storage,
    `${process.env.REACT_APP_ADVICE_IMAGE_FOLDER}/${imageFile.name + v4()}`
  );
  await uploadBytes(imageRef, imageFile)
    .then(() => {
      getDownloadURL(imageRef)
        .then(url => {
          addDoc(adviceCollectionRef, {
            adviceTitle: titleRef.current.value,
            adviceShortBody: shortBodyRef.current.value,
            adviceFullBody: fullBodyRef.current.value,
            adviceImageUrl: url,
          });
          alert("Successfully added to database");
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};
