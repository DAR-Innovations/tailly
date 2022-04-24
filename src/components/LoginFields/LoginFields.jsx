import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsAuth from "../Hooks/useIsAuth";
import { useCookies } from "react-cookie";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const LoginFields = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const emailRef = useRef();
  const passwordRef = useRef();
  const isAuthLocal = useIsAuth();
  const [isAuth, setIsAuth] = useState(isAuthLocal);
  const pageNavigation = useNavigate();

  useEffect(() => {
    isAuth && pageNavigation("../");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  async function loginAccount() {
    const loginEmail = emailRef.current.value;
    const loginPassword = passwordRef.current.value;
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      onAuthStateChanged(auth, currentUser => {
        setIsAuth(true);
        setCookie(
          process.env.REACT_APP_USER_COOKIE,
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
    <div className="login-fields">
      <div className="login-header">
        <div className="login-title">Welcome back</div>
        <div className="login-subtitle">Login to your account</div>
      </div>

      <div className="login-inputs">
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
      </div>

      <button onClick={loginAccount} className="login-btn">
        Login
      </button>

      <div className="login-register">
        <div className="login-have-account">Already have an account?</div>
        <Link to="/registration">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginFields;
