import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import useIsAuth from "../Hooks/useIsAuth";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { usersDataCollectionRef } from "../FirebaseCollections/userDataCollection";

const RegisterFields = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const isAuthLocal = useIsAuth();
  const [isAuth, setIsAuth] = useState(isAuthLocal);

  const pageNavigation = useNavigate();

  useEffect(() => {
    isAuth && pageNavigation("../");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  async function registerAccount() {
    const registerEmail = emailRef.current.value;
    const registerPassword = passwordRef.current.value;
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      onAuthStateChanged(auth, currentUser => {
        setIsAuth(true);

        addDoc(usersDataCollectionRef, {
          userName: nameRef.current.value,
          userEmail: emailRef.current.value,
          uid: currentUser?.uid,
        });

        setCookie(
          process.env.REACT_APP_USER_COOKIE,
          {
            isAuth: true,
            uid: currentUser?.uid,
          },
          {
            maxAge: 43200,
          }
        );
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Email" ref={emailRef} />
      <input type="text" placeholder="Full name" ref={nameRef} />
      <input type="text" placeholder="Password" ref={passwordRef} />
      <button onClick={registerAccount}>Create</button>
    </div>
  );
};

export default RegisterFields;
