import React from "react";

const Panel = (props) => {
  const {children, ...rest } = props;

  return (
    <div className="panelStyle" {...rest}>
      {children}
    </div>
  );
};

export default Panel;
