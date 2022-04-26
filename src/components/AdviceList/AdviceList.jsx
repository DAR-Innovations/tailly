import React from "react";
import "./adviceList.css";
import AdviceCard from "../AdviceCard/AdviceCard";
import useFetchAdviceData from "../Hooks/useFetchAdviceData";

const AdviceList = () => {
  const fetchedAdvice = useFetchAdviceData();

  return (
    <div className="advice-list">
      {fetchedAdvice?.map(advice => (
        <AdviceCard key={advice.id} info={advice} />
      ))}
    </div>
  );
};

export default AdviceList;
