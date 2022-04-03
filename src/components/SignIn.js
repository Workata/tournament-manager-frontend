// * material UI
import {Dialog,
    DialogTitle,
    TextField,
    Button,
    DialogContent
} from "@mui/material";

// * others
import PropTypes from 'prop-types';

import React from "react";

// * icons
import LoginIcon from '@mui/icons-material/Login';

export default function SignIn(props) {

    const handleSignInClose = () => {
        props.setOpenSignIn(false);
    };

    return (
        <Dialog onClose={handleSignInClose} open={props.openSignIn}>
            <DialogContent
                sx={{
                }}
            >
                <DialogTitle>Sign in</DialogTitle>
                <TextField 
                     sx={{
                        display: 'block',
                        width: 'fit-content',
                        margin: '10% 0'
                      }}
                    id="filled-basic" 
                    label="Login" 
                    variant="filled"
                />
                <TextField 
                     sx={{
                        display: 'block',
                        width: 'fit-content',
                        margin: '10% 0'
                      }}
                    id="filled-basic" 
                    label="Password" 
                    variant="filled" 
                />
                <Button 
                    sx={{
                        display: 'block', 
                        width: '60%', 
                        marginLeft: 'auto', 
                        marginRight: '0',
                        bgcolor: 'primary.turquoise',
                        color: 'primary.main'
                        }} 
                        variant="contained">
                    Sign in
                    <LoginIcon sx={{float: 'right'}}/>
                </Button>
            </DialogContent>
        </Dialog>
    )
}

// TODO define correct prop types
SignIn.propTypes = {
    setOpenSignIn: PropTypes.any,
    openSignIn: PropTypes.any
}