import React from "react";

function EraseButton(props) {
  const eraseHandler = () => props.setpeople([]);
  return (
    <button className="button" onClick={eraseHandler}>
      Erase all
    </button>
  );
}

export default EraseButton;
