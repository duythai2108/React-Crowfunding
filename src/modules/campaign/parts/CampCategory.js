import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampCategory = ({ text = "Education", className = " text-sm" }) => {
  return (
    <Link to="/" className="flex items-baseline gap-x-3">
      <IconFolder></IconFolder>
      <span className={classNames(" font-medium text-text3 mb-4", className)}>
        {text}
      </span>
    </Link>
  );
};

export default CampCategory;
