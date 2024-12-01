import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  cardTitle,
  cardTitleStyle,
  cardSubTitle,
  cardSubTitleStyle,
  cardStyle,
  showButton = false,
}) => {
  return (
    <div
      className={twMerge(
        `card bg-base-100 h-auto w-96 shadow-xl`,
        cardStyle ? cardStyle : ""
      )}
    >
      <div className="card-body">
        {cardTitle && (
          <>
            <h2
              className={twMerge(
                `card-title`,
                cardTitleStyle
                  ? cardTitleStyle
                  : ""
              )}
            >
              {cardTitle}
            </h2>
            {cardSubTitle && (
              <h4 className={cardSubTitleStyle}>
                {cardSubTitle}
              </h4>
            )}
          </>
        )}
        {children}
        {showButton && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  cardTitle: PropTypes.string,
  cardTitleStyle: PropTypes.string,
  cardSubTitle: PropTypes.string,
  cardSubTitleStyle: PropTypes.string,
  cardStyle: PropTypes.string,
  showButton: PropTypes.bool,
};
export default Card;
