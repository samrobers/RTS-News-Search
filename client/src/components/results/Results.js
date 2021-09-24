import React from "react";

function Results(props) {
  return (
    <>
      {props.data.map((data) => (
        <li className="text-white fs-1">{data.author}</li>
      ))}
    </>
  );
}

export default Results;
