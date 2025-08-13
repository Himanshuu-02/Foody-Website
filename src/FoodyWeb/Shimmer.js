import React from "react";
import "../Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {/* Simulating restaurant header */}
      <div className="shimmer-banner"></div>
      <div className="shimmer-title"></div>
      <div className="shimmer-subtitle"></div>

      {/* Menu item shimmer cards */}
      <div className="shimmer-menu">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-text"></div>
              <div className="shimmer-text short"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
