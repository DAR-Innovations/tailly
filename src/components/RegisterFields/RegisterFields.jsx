import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import useIsAuth from "../Hooks/useIsAuth";
import { useNavigate } from "react-router-dom";

const RegisterFields = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const isAuthLocal = useIsAuth();
  const [isAuth, setIsAuth] = useState(isAuthLocal);
  const pageNavigation = useNavigate();

  useEffect(() => {
    isAuth && pageNavigation("../");
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
        localStorage.setItem(
          "userAuthData",
          JSON.stringify({ isAuth: true, uid: currentUser?.uid })
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
