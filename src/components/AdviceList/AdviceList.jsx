import React from "react";
import "./adviceList.css";
import AdviceCard from '../AdviceCard/AdviceCard'

const AdviceList = () => {
  return (
    <div className="advice-list">
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
    </div>
  );
};

export default AdviceList;
