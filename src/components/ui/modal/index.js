import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import "./style.scss";

const Modal = ({
  open,
  onClose,
  title,
  content,
  actions,
  size = "medium",
  ...props
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={`ec-modal-size-${size}`}
      {...props}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default Modal;
