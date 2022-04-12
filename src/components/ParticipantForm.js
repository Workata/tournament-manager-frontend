import React, { useState } from "react";
import PropTypes from 'prop-types';

// * material UI
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl
 } from "@mui/material";

// needed for date of birth input
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export default function ParticipantForm(props) {

  const [dateOfBirth, setDateOfBirth] = useState(new Date('2014-08-18T21:11:54'));
  const [sex, setSex] = useState(1);
  const inputWidth = 255;

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
        sx={{color: 'secondary'}}
      >
        <TextField
          sx={{marginTop: '15px', width: `${inputWidth}px`}}
          label="First name"
          type="text"
          color="secondary"
        />

        <TextField
          sx={{marginTop: '15px', width:  `${inputWidth}px`}}
          label="Last name"
          type="text"
          color="secondary"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date of birth"
            inputFormat="dd/MM/yyyy"
            value={dateOfBirth}
            onChange={(newDateOfBirth) => {setDateOfBirth(newDateOfBirth)}}
            renderInput={
              (params) => <TextField {...params}
                sx={{
                  marginTop: '15px',
                  color: 'secondary'
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
          sx={{marginTop: '15px', width:  `${inputWidth}px`}}
          label="Country"
          type="text"
          color="secondary"
        />

        <Select
          sx={{
            marginTop: '15px',
            width:  `${inputWidth}px`,
            color: 'secondary',
          }}
          value={sex}
          label="Sex" // TODO set label color for black - right now its white so you cant see it
          onChange={(event) => {setSex(event.target.value)}}
          color='secondary'
        >
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Male</MenuItem>
        </Select>
      </FormControl>

    </Box>
  )
}

// TODO define correct prop types
ParticipantForm.propTypes = {
  formId: PropTypes.any,
}