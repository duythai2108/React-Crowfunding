import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultClassName =
    "py-4 text-base font-semibold rounded-xl flex justify-center items-center p-4 min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary text-secondary  bg-opacity-10";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link className={classNames(defaultClassName, className)} to={rest.href}>
        {child}
      </Link>
    );
  return (
    <button
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
