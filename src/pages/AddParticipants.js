import React from "react";

// * material UI
import {
  Box,
  TextField,
  Button,
  IconButton
} from "@mui/material";

// * icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

// * components
import ParticipantForm from "../components/ParticipantForm";

export default function AddParticipants() {
  return (
    // Main container
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderStyle: 'solid'
      }}
    >
      <Box
        sx={{
          width: '580px',
          height: '60px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
          backgroundColor: 'primary.main',
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
          padding: '20px',
        }}
      >
        <TextField
          sx={{width: '200px'}}
          label="Verification code"
          type="text"
          color="secondary"
        />

        <TextField
          sx={{marginLeft: '15px', width: '250px'}}
          label="Club"
          type="text"
          color="secondary"
        />

        <Button
          sx = {{
            width: '100px',
            height: '40px',
            marginLeft: '15px',
            marginTop: '10px',
          }}
          variant="outlined"
          color="secondary"
        >
          Submit
        </Button>

      </Box>

      {/* Forms Wrapper */}
      <Box
        sx={{
          // display: 'flex',
          borderStyle: 'solid',
          // width: '80%',
          height: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '40px'
        }}
      >
        <ParticipantForm/>
        {/* <ParticipantForm/> */}

        <IconButton
          sx={{}}
          onClick={()=>{console.log("XD")}}
        >
          <AddCircleIcon
          sx={{
            fontSize: '70px',
            color: 'primary.turquoise'
            }}
          />
         </IconButton>

      </Box>
    </Box>
  );
}
