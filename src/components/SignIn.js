// * material UI
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogContent,
  DialogActions,
  Typography
} from "@mui/material";

// * navigation
import { useNavigate} from "react-router-dom";

// * others
import PropTypes from 'prop-types';
import React, { useState, useContext } from "react";
import { AppContext } from './../contexts/AppContext';
import { getAccessToken } from "../services/loginService";

// * icons
import LoginIcon from '@mui/icons-material/Login';


export default function SignIn (props) {
  const { setTokenCookie, setTokenValue } = useContext(AppContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();


  const handleLoginButton = async () => {
    let body = {username: username, password: password}

    getAccessToken(body, (res) => {
      setTokenValue(res.data.access);
      setTokenCookie('token', res.data.access);
      props.setOpenSignIn(false);
      return navigate("/admin");
    }, (err) => {
      console.log(err)
      setErrorMsg("Wrong username or password!");
    });

  }

  const handleSignInClose = () => {
    setErrorMsg('');
    props.setOpenSignIn(false);
  };

  return (
    <Dialog
      onClose={handleSignInClose}
      open={props.openSignIn}
      fullWidth
      maxWidth="xs"
    >
      {/* Title */}
      <DialogTitle>Sign in</DialogTitle>

        <DialogContent dividers>
          {/* Error msg */}
          <Typography variant="h6" sx = {{color: "red"}}>
            {errorMsg}
          </Typography>

          {/* Username text field */}
          <TextField
            sx={{
              display: 'block',
              margin: '10% 0'
            }}
            id="usernameTextField"
            label="Username"
            variant="filled"
            type="text"
            fullWidth
            onChange={ (event) => { setUsername(event.target.value)} }
            color="secondary"
          />

          {/* Password text field */}
          <TextField
            sx={{
              display: 'block',
              margin: '10% 0'
            }}
            id="passwordTextField"
            label="Password"
            variant="filled"
            color="secondary"
            type="password"
            fullWidth
            onChange={ (event) => { setPassword(event.target.value)} }
          />

          <DialogActions>

          {/* Sign in button */}
          <Button
            sx={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: '0',
              bgcolor: 'primary.turquoise',
              color: 'primary.main',
              "&:hover": {
                  backgroundColor: "primary.turquoiseDark",
              }
            }}
            variant="contained"
            onClick={handleLoginButton}
          >
            Sign in
            <LoginIcon sx={{float: 'right'}}/>
        </Button>

        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

// TODO define correct prop types
SignIn.propTypes = {
    setOpenSignIn: PropTypes.any,
    openSignIn: PropTypes.any
}