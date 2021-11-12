import React from "react";
import "./style.scss";

const Content = ({ children }) => {
  return (
    <div className="ec-content-main">
      <div className="ec-container ec-content-inner">{children}</div>
    </div>
  );
};

export default Content;
