import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import "./profileModal.css";
import { useCookies } from "react-cookie";

const ProfileModal = ({ isActive, setIsActive }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userAuthData"]);
  const pageNavigation = useNavigate();

  async function logoutAccount() {
    await signOut(auth);
    removeCookie("userAuthData");
    setIsActive(false);
    pageNavigation("../");
  }

  return (
    <div className={isActive ? "profileModalActive" : "profileModal"}>
      <div className="profileModal-content">
        <div className="profileModal-name">Alexander Ivanov</div>
        <div className="profileModal-logout">
          <button onClick={logoutAccount}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
