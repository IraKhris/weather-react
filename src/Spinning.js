import React from "react";
import ReactLoading from "react-loading";

const Example = ({ type, color }) => (
  <ReactLoading
    type={"spinningBubbles"}
    color={"#8875ff"}
    height={"20%"}
    width={"20%"}
    className="Spinning"
  />
);

export default Example;
