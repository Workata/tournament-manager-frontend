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
import AddCircleIcon from "@mui/icons-material/AddCircle";

// * components
import ParticipantForm from "../components/ParticipantForm";

// * services
import { getClubs } from "../services/clubService";
import { verifyCode } from "../services/verificationCodeService";
import { createParticipant } from "../services/participantService";
//  * models
import { Club } from "../models/Club";
import { AddParticipant } from "../models/AddParticipant";

import Moment from "moment";

export default function AddParticipants() {
  // eslint-disable-next-line no-unused-vars
  const [allForms, setAllForms] = useState([{}]);

  // eslint-disable-next-line no-unused-vars
  let firstParticipant = new AddParticipant(1);

  // eslint-disable-next-line no-unused-vars
  const [participantId, setParticipantId] = useState(1);
  const [participants, setParticipants] = useState([firstParticipant]);
  const [participantsForms, setParticipantsForms] = useState([
    <ParticipantForm
      key={firstParticipant.tempId}
      participant={firstParticipant}
      firstForm={true}
    />,
  ]);

  const [verificationCode, setVerificationCode] = useState("");

  const [club, setClub] = useState(""); // * currently selected club
  const [clubs, setClubs] = useState(); // * all clubs

  const handleAddForm = () => {
    let newParticipantId = participantId + 1;
    let newParticipant = new AddParticipant(newParticipantId);

    setParticipantId(newParticipantId);

    let tempParticipantsForms = participantsForms;
    tempParticipantsForms.push(
      <ParticipantForm
        key={newParticipant.tempId}
        participant={newParticipant}
        handleDeleteForm={handleDeleteForm}
        firstForm={false}
      />
    );
    setParticipantsForms(tempParticipantsForms);

    let tempParticipants = participants;
    tempParticipants.push(newParticipant);
    setParticipants(tempParticipants);
    
  };

  const handleDeleteForm = (participantId) => {
    let index = participants.findIndex((p) => p.tempId == participantId);

    let tempParticipants = participants;
    let tempParticipantsForms = participantsForms;


    if (index > -1) {
      tempParticipants.splice(index, 1);
      tempParticipantsForms.splice(index, 1);
    }
    console.log(index);
    console.log(tempParticipants);
    console.log(tempParticipantsForms);

    setParticipants(tempParticipants);
    setParticipantsForms([tempParticipantsForms]);
  };

  const handleSubmit = () => {
    // TODO data valdiation and change verification code valdiation
    verifyCode(
      { code: verificationCode },
      (res) => {
        console.log(res);
        for (var participantId in participants) {
          let currentParticipant = participants[participantId];
          let body = {
            first_name: currentParticipant["firstName"],
            last_name: currentParticipant["lastName"],
            gender: currentParticipant["gender"],
            date_of_birth: Moment(currentParticipant["dateOfBirth"]).format(
              "YYYY-MM-DD"
            ),
            club: club,
            verification_code: res.data.id,
            category: currentParticipant["category"],
          };
          createParticipant(
            body,
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    // * fetch Clubs
    getClubs(
      (res) => {
        let clubsObjects = res.data.map((clubJson) => new Club(clubJson));
        setClubs(clubsObjects);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // borderStyle: 'solid'
      }}
    >
      <Box
        sx={{
          width: "580px",
          height: "60px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
          backgroundColor: "primary.main",
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
          padding: "20px",
        }}
      >
        <TextField
          sx={{ width: "200px" }}
          label="Verification code"
          type="text"
          color="secondary"
          onChange={(event) => setVerificationCode(event.target.value)}
        />

        <FormControl sx={{ marginLeft: "15px", width: "250px" }}>
          <InputLabel
            id="clubFilter"
            color="secondary"
            sx={{ color: "secondary.main" }}
          >
            Club
          </InputLabel>

          <Select
            labelId="clubFilter"
            id="ClubsSelector"
            value={club}
            label="Club"
            color="secondary"
            onChange={(event) => setClub(event.target.value)}
          >
            {clubs &&
              clubs.map((club) => {
                return (
                  <MenuItem key={club.id} value={parseInt(club.id)}>
                    {club.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <Button
          sx={{
            width: "100px",
            height: "40px",
            marginLeft: "15px",
            marginTop: "10px",
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
          display: "flex",
          // borderStyle: 'solid',
          width: "100%",
          height: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            overflowY: "hidden",
          }}
        >
          {participantsForms.map((form, i) => {
            return (
              <Box key={i} sx={{ marginLeft: "20px", marginRight: "20px" }}>
                {form}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={
            {
              // borderStyle: 'solid',
            }
          }
        >
          <IconButton
            sx={{
              marginTop: "320px",
            }}
            onClick={handleAddForm}
          >
            <AddCircleIcon
              sx={{
                fontSize: "70px",
                color: "primary.turquoise",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
