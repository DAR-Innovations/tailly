import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import useIsAuth from "../Hooks/useIsAuth";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const RegisterFields = () => {
  const [cookies, setCookie] = useCookies(["userAuthData"]);
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
        setCookie(
          "userAuthData",
          { isAuth: true, uid: currentUser?.uid },
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