import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};

export default Button;
