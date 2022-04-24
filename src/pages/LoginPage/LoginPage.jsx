import React from "react";
import LoginFields from "../../components/LoginFields/LoginFields";
import "./loginStyle.css";
import Image from "../../assets/registerImage.png";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <LoginFields />
        
        <div className="login-image">
          <img src={Image} alt="with-taily" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
