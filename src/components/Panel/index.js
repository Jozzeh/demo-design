import React from "react";

const Panel = (props) => {
  return (
    <div className="panelStyle">
      {props.children}
    </div>
  );
};

export default Panel;
