import PropTypes from "prop-types";
import React from "react";

const Button = ({
  isLoading = false,
  btnText = "Submit",
  onClick,
}) => {
  return (
    <button
      className="btn"
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          Loading
        </>
      ) : (
        `${btnText}`
      )}
    </button>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
