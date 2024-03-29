import React, { useState, useEffect } from "react";

// * material UI
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

// * icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

// * components
import ParticipantForm from "../components/ParticipantForm";

// * services
import { getClubs } from "../services/clubService";
import { verifyCode } from "../services/verificationCodeService";
import { createParticipant } from "../services/participantService";

//  * models
import { Club } from "../models/Club";

import Moment from "moment";

import UserFeedback from "../components/UserFeedback";

export default function AddParticipants() {
  const [allForms, setAllForms] = useState({});

  const [participantsForms, setParticipantsForms] = useState([<ParticipantForm key={1} formId={1}
   allForms={allForms} setAllForms={setAllForms}/>]);

  const [verificationCode, setVerificationCode] = useState('');

  const [club, setClub] = useState('');   // * currently selected club
  const [clubs, setClubs] = useState();   // * all clubs

  const [submitFeedback, setSubmitFeedback] = useState({open: false, severity: 'error', message: '' });

  const handleAddForm = () => {
    setParticipantsForms(participantsForms => (
        [...participantsForms,
          <ParticipantForm
            key={participantsForms.length + 1}
            formId={participantsForms.length + 1}
            allForms={allForms}
            setAllForms={setAllForms}
          />
        ]
      )
    );
  }



  const handleSubmit = () => {
    // TODO data valdiation and change verification code valdiation
    verifyCode({code: verificationCode}, (res) => {
      console.log(res);
      for(var formId in allForms){
        let currentForm = allForms[formId];
        let body = {
          first_name: currentForm['firstName'],
          last_name:currentForm['lastName'],
          gender: currentForm['gender'],
          date_of_birth: Moment(currentForm['dateOfBirth']).format("YYYY-MM-DD"),
          club: club,
          verification_code: res.data.id,
          category: currentForm['category']
        }
        createParticipant(body, (res) => {
          console.log(res);
          setSubmitFeedback({open: true, severity: 'success', message: 'Participants have been added successfully.' });
        }, (err) => {
          console.log(err);
          setSubmitFeedback({open: true, severity: 'error', message: (err.message) });
        })
      }
    }, (err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    // * fetch Clubs
    getClubs((res) => {
      let clubsObjects = res.data.map(
        (clubJson) => new Club(clubJson)
      );
      setClubs(clubsObjects);
    }, (err) => {
      console.log(err);
    });
  }, [])

  return (
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
          onChange={(event) => setVerificationCode(event.target.value)}
        />

        <FormControl sx={{marginLeft: '15px', width: '250px'}}>
          <InputLabel id="clubFilter" color='secondary' sx={{color: 'secondary.main'}}>Club</InputLabel>

          <Select
            labelId="clubFilter"
            id="ClubsSelector"
            value={club}
            label="Club"
            color="secondary"
            onChange={(event) => setClub(event.target.value)}
          >
            {
              clubs && clubs.map((club) => {
                return(
                  <MenuItem key={club.id} value={parseInt(club.id)}>{club.name}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>

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
      <UserFeedback setFeedbackState={setSubmitFeedback} feedbackState={submitFeedback}/>
    </Box>
  );
}

