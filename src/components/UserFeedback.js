// * material UI
import { Snackbar, Alert } from "@mui/material";

import PropTypes from "prop-types";
import React from "react";

export default function UserFeedback(props) {
  // eslint-disable-next-line no-unused-vars
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setFeedbackState(state => ({ ...state, open: false }));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.feedbackState.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={props.feedbackState.severity}
        sx={{ width: "100%" }}
      >
        {props.feedbackState.message}
      </Alert>
    </Snackbar>
  );
}

UserFeedback.propTypes = {
    setFeedbackState: PropTypes.any,
    feedbackState: PropTypes.any
};
