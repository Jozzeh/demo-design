import React from "react";

import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className="buttonStyle">{props.value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

Button.defaultProps = {
  value: "No value is given"
}


export default Button;