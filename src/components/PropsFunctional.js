import React from "react";

const PropsFunctional = (props) => {
  return (
    <div>
      <h1>{props.name} also known as {props.hero}</h1>
      {props.children}
    </div>
  );
}

export default PropsFunctional;