// * material UI
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogContent,
  DialogActions
} from "@mui/material";

// * others
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import React, {useState} from "react";

// * icons
import LoginIcon from '@mui/icons-material/Login';

export default function SignIn(props) {

  const handleSignInClose = () => {
      props.setOpenSignIn(false);
  };

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('')

  const handleEmailChange = event => {
      const emailValue = event.target.value;

      if(isEmail(emailValue)) {
          setIsEmailValid(true);
      } else {
          setIsEmailValid(false);
      }
      setEmail(emailValue);
  }



  const handleLoginButton = async () => {
      console.log(password)
      console.log(email)
      fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          username: email,
          password: password
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

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
            {/* Email text field */}
            <TextField
                  sx={{
                    display: 'block',
                    margin: '10% 0'
                  }}
                id="filled-basic"
                label="E-mail"
                variant="filled"
                fullWidth
                onChange={event => handleEmailChange(event)}
                error={!isEmailValid && email != ''}
                helperText={!isEmailValid && email != '' ? `Wrong e-mail address!` : ""}
            />
              {/* Password text field */}
            <TextField
                  sx={{
                    display: 'block',
                    margin: '10% 0'
                  }}
                id="filled-basic"
                label="Password"
                variant="filled"
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