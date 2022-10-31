import React from "react";

const text = ({title, knowledge}) => {
  return (
    <div>
      <>
        <div style={{ color: "white" }}>{title}</div>
        <div style={{ color: "red" }}>{knowledge}</div>
      </>
    </div>
  );
};

export default text;
