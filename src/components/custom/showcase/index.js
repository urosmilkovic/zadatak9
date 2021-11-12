import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui";
import "./style.scss";

const Showcase = ({
  title,
  src,
  description,
  to,
  className,
  main,
  ...props
}) => {
  return (
    <div
      className={`ec-showcase-main ${
        main ? "ec-showcase-big" : ""
      } ${className}`}
      {...props}
    >
      <div className="ec-showcase-background">
        {src ? <img src={src} alt="Showcase" /> : null}
      </div>
      <div className="ec-showcase-inner">
        {title ? <h3>{title}</h3> : null}
        {description ? <p>{description}</p> : null}
        <Button color="primary" variant="contained" component={Link} to={to}>
          View more
        </Button>
      </div>
    </div>
  );
};

export default Showcase;
