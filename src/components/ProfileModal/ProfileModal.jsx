import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import "./profileModal.css";
import { useCookies } from "react-cookie";
import useFetchUserData from "../Hooks/useFetchUserData";

const ProfileModal = ({ isActive, setIsActive }) => {
  const fetchedData = useFetchUserData();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  const pageNavigation = useNavigate();

  async function logoutAccount() {
    await signOut(auth);
    removeCookie(process.env.REACT_APP_USER_COOKIE);
    setIsActive(false);
    pageNavigation("../");
  }

  return (
    <div className={isActive ? "profileModalActive" : "profileModal"}>
      <div className="profileModal-content">
        <div className="profileModal-name">
          {fetchedData?.userName || "Loading"}
        </div>
        <div className="profileModal-logout">
          <button onClick={logoutAccount}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
