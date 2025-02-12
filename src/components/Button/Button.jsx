import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  return (
    <>
      <button
        // className="bg-primary text-white rounded-lg py-2.5 px-5"
        className={className}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button, submit, reset"]),
  // variant: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "danger",
  //   "contactForm",
  //   "plain",
  // ]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
