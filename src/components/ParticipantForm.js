import React, { useState } from "react";
import PropTypes from 'prop-types';

// * material UI
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
 } from "@mui/material";

// needed for date of birth input
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export default function ParticipantForm(props) {

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  return (
    <Box
      sx={{
        width: '300px',
        height: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        backgroundColor: 'primary.main',
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        padding: '20px'
      }}
    >
      <Typography variant ="h6">{props.formId}.</Typography>

      <FormControl
        sx={{color: 'secondary', width: '255px'}}
      >
        <TextField
          sx={{marginTop: '15px'}}
          label="First name"
          autoComplete="new-password"
          type="text"
          color="secondary"
        />

        <TextField
          sx={{marginTop: '15px'}}
          label="Last name"
          type="text"
          color="secondary"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date of birth"
            inputFormat="dd/MM/yyyy"
            value={dateOfBirth || null}
            onChange={(newDateOfBirth) => {setDateOfBirth(newDateOfBirth)}}
            renderInput={
              (params) => <TextField {...params}
                sx={{
                  marginTop: '15px',
                  color: 'secondary.main'
                }}
                color = 'secondary'
                InputLabelProps = {{
                  style: { color: '#000' },
                }}
              />
            }
          />
        </LocalizationProvider>

        <TextField
          sx={{marginTop: '15px'}}
          label="Country"
          type="text"
          color="secondary"
          // * tun off autocomplete
          autoComplete="new-password"
        />

        <FormControl sx={{color: 'secondary', marginTop: '15px'}} >
          <InputLabel id="genderSelectLabel" color='secondary' sx={{color: 'secondary.main'}}>Gender</InputLabel>
          <Select
            labelId="genderSelectLabel"
            value={gender}
            label="Gender"
            onChange={(event) => {setGender(event.target.value)}}
            color='secondary'
          >
            <MenuItem value={1}>Female</MenuItem>
            <MenuItem value={2}>Male</MenuItem>
          </Select>
        </FormControl>

      </FormControl>
    </Box>
  )
}

// TODO define correct prop types
ParticipantForm.propTypes = {
  formId: PropTypes.any,
}