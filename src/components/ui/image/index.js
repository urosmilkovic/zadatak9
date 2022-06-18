import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import "./style.scss";

const Image = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="ec-image-main">
      <img
        className={loaded ? "ec-image-loaded" : ""}
        src={src}
        alt={alt}
        onLoad={() => setTimeout(() => setLoaded(true), 1000)}
      />
      <div
        className={`ec-image-loader ${loaded ? "ec-image-loader-hide" : ""}`}
      >
        <CircularProgress />
      </div>
    </div>
  );
};

export default Image;
