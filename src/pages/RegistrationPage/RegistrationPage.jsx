import React from "react";
import RegisterFields from "../../components/RegisterFields/RegisterFields";
import "./registrationStyle.css";
import Image from "../../assets/registerImage.png";

const RegistrationPage = () => {
  return (
    <div className="register">
      <div className="register-content">
        <div className="register-image">
          <img src={Image} alt="with-taily" />
        </div>
        <RegisterFields />
      </div>
    </div>
  );
};

export default RegistrationPage;
