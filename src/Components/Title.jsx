import React from "react";

function Title({ click, value }) {
  return <div onClick={click}>{value}</div>;
}

export default Title;
