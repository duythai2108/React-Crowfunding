import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "components/common/ErrorComponents";

const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center gap-x-3 w-full justify-center py-4 border border-strock rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white dark:border-darkStroke"
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponents,
});
