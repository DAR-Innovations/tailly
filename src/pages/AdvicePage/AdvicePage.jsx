import React from "react";
import "./adviceStyle.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AdviceList from "../../components/AdviceList/AdviceList";

const AdvicePage = () => {
  return (
    <div className="advice">
      <Navbar />
      <div className="advice-content">
        <div className="advice-title">We would give you best advice</div>
        <AdviceList />
      </div>
      <Footer />
    </div>
  );
};

export default AdvicePage;
