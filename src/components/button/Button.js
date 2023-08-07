import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      className={`py-4 text-base font-semibold rounded-xl flex justify-center items-center text-white p-4 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Button;
