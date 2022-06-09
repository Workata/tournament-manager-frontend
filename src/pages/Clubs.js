import React, {useState, useEffect} from "react";
import * as EmailValidator from 'email-validator';
import UserFeedback from "../components/UserFeedback";

// * material UI
import {
  Box,
  Typography,
  TextField,
  Button,
 } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

// * services
import { createClub, getClubs } from "../services/clubService";

//  * models
import { Club } from "../models/Club";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 220,
    editable: false,
  },
  {
    field: 'ceo',
    headerName: 'CEO',
    width: 180,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 220,
    editable: false,
  }
];

export default function Clubs() {

  // * states needed to craete a new club
  const [name, setName] = useState('');
  const [ceo, setCeo] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [ceoError, setCeoError] = useState('');
  const [submitFeedback, setSubmitFeedback] = useState({open: false, severity: 'error', message: '' });

  // * state for all clubs from the DB
  const [clubs, setClubs] = useState();

  const fetchClubs = () => {
    getClubs((res) => {
      let clubsObjects = res.data.map(
        (clubJson) => new Club(clubJson)
      );
      setClubs(clubsObjects);
    }, (err) => {
      console.log(err);
    });
  }

  const handleSubmit = () => {
    // TODO data valdiation
    let body = {name: name, ceo: ceo, email: email}

    createClub(body, (res) => {
      console.log(res);

      // * clean up fields
      setName("");
      setCeo("");
      setEmail("");

      // * fetch clubs again to have updated list
      fetchClubs();
      setSubmitFeedback({open: true, severity: 'success', message: 'Club has been added successfully.' });
    }, (err) => {
      console.log(err);
      setSubmitFeedback({open: true, severity: 'error', message: (err.message) });
    });
  }

  const emailValidation = () => {
    if(EmailValidator.validate(email) || email === ''){
        setEmailError(false);
    }
    else{
      setEmailError(true);
    }
}

const nameValidation = () => {
  setNameError(validateText(name))
}

const ceoValidation = () => {
  setCeoError(validateText(ceo))
}

const validateText = (validatedString) => {
  return /\d/.test(validatedString);
}

  useEffect(() => {
    fetchClubs();
  }, []);

  useEffect(() => {
    emailValidation();
  }, [email]);

  useEffect(() => {
    nameValidation();
  }, [name]);

  useEffect(() => {
    ceoValidation();
  }, [ceo]);


  return (
    <Box
      sx={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center'
        }}
      >
        Manage Clubs
      </Typography>

      <Box
        sx = {{
          display: 'flex',
          justifyContent: 'center',
          gap: '100px',
        }}
      >
        <Box
          sx={{
            width: '800px',
            height: '600px',
            backgroundColor: 'primary.main',
            boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
            marginTop: "50px"
          }}
        >
          <DataGrid
            rows={clubs}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            color="secondary"
          />
        </Box>

        <Box
          sx={{
            width: '600px',
            height: '450px',
            backgroundColor: 'primary.main',
            boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
            marginTop: "50px",
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '20px'}}>
            Create a club
          </Typography>

          <TextField
            sx={{width: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px"}}
            label="Name"
            type="text"
            error={nameError}
            required
            color="secondary"
            onChange={ (event) => { setName(event.target.value)} }
          />

          <TextField
            sx={{width: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: "35px"}}
            label="CEO"
            type="text"
            error={ceoError}
            required
            color="secondary"
            onChange={ (event) => { setCeo(event.target.value)} }
          />

          <TextField
            sx={{width: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: "35px"}}
            label="Email"
            type="text"
            required
            error={emailError}
            color="secondary"
            onChange={ (event) => {setEmail(event.target.value)} }
          />

        <Button
          sx={{width: '100px', height: '40px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px"}}
          variant="outlined"
          color="secondary"
          disabled={emailError || ceoError || nameError}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        </Box>
      </Box>
      <UserFeedback setFeedbackState={setSubmitFeedback} feedbackState={submitFeedback}/>
    </Box>
  );
}
