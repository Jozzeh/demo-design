import React from "react";

import PropTypes from 'prop-types';

const Button = (props) => {
  const {value, ...rest } = props;

  return <button className="buttonStyle" {...rest}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

Button.defaultProps = {
  value: "No value is given"
}


export default Button;