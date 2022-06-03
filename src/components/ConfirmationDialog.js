import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleYes = () => {
    props.confirmAction();
    handleClose();
  };

  const handleNo = () => {
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.dialogMessege}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="button" onClick={handleNo}>
            No
          </Button>
          <Button variant="contained" color="button" onClick={handleYes}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ConfirmationDialog.propTypes = {
  dialogMessege: PropTypes.string,
  dialogTitle: PropTypes.string,
  setOpen: PropTypes.any,
  open: PropTypes.any,
  confirmAction: PropTypes.any,
};
