import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "./data";
const Question = (question) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div>
        <h4>{question.title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{question.info}</p>}
    </>
  );
};

export default Question;
