import React, { useState } from "react";

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

// import uniqid from 'uniqid';

export default function AddParticipants() {
  const [participantsForms, setParticipantsForms] = useState([<ParticipantForm key={1} formId={1}/>]);


  const handleAddForm = () => {
    // console.log("Handle add form triggered");

    setParticipantsForms(participantsForms => (
        [...participantsForms,
          <ParticipantForm
            key={participantsForms.length + 1}
            formId={participantsForms.length + 1}
          />
        ]
      )
    );

    console.log(participantsForms);

  }

  const handleSubmit = () => {
    console.log("Submit forms:")
    console.log(participantsForms)
  }

  return (
    // Main container
    <Box
      sx={{
        width: '100%',
        height: '100%',
        // borderStyle: 'solid'
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
          autoComplete="new-password"
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
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </Box>

      {/* Forms Wrapper */}
      <Box
        sx={{
          display: 'flex',
          // borderStyle: 'solid',
          width: '100%',
          height: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '40px'
        }}
      >
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'flex-start',
            overflowY: 'hidden'
          }}
        >
          {participantsForms.map((form, i)=> {
            return (<Box key={i} sx={{marginLeft: '20px', marginRight: '20px'}}>{form}</Box>)
          })}
        </Box>

        <Box
          sx={{
            // borderStyle: 'solid',
          }}
        >
          <IconButton
            sx={{
              marginTop: "320px",
            }}
            onClick={handleAddForm}
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
    </Box>
  );
}

