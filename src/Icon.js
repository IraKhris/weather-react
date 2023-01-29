import React from "react";

export default function Icon(props) {
  return (
    <div>
      <img className="icon" src={props.code} alt="icon"></img>
    </div>
  );
}
