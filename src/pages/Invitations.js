import React, {useState, useEffect} from "react";

// * material UI
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
 } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

// * services
// eslint-disable-next-line no-unused-vars
import { getVerificationCodesCapacity, sendInvitations } from "../services/verificationCodeService";
import { getClubs } from "../services/clubService";

//  * models
import { VerificationCodeCapacity } from "../models/VerificationCodeCapacity";
import { Club } from "../models/Club";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'participantsCount',
    headerName: 'Signed',
    width: 70,
    editable: false,
  },
  {
    field: 'participantsLimit',
    headerName: 'Limit',
    width: 70,
    editable: false,
  },
  {
    field: 'club',
    headerName: 'Club',
    width: 220,
    editable: false,
  },
  {
    field: 'verificationCode',
    headerName: 'Code',
    width: 100,
    editable: false,
  },
];

export default function Invitations() {

  // * states needed to craete a new club
  const [choosenClubId, setChoosenClubId] = useState('');
  const [clubs, setClubs] = useState('');
  const [participantsLimit, setParticipantsLimit] = useState('');


  // * state for all clubs from the DB
  const [verificationCodesCapacity, setVerificationCodesCapacity] = useState();

  const fetchVerificationCodesCapacity = () => {
    getVerificationCodesCapacity((res) => {
      let verificationCodesCapacityObjects = res.data.map(
        (verificationCodesCapacityJson) => new VerificationCodeCapacity(verificationCodesCapacityJson)
      );
      setVerificationCodesCapacity(verificationCodesCapacityObjects);
    }, (err) => {
      console.log(err);
    });
  }

  const fetchClubs = () => {
    // * fetch Clubs
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
    let body = {
      club_id: choosenClubId,
      participants_limit: participantsLimit
    }

    sendInvitations(body, (res) => {
      console.log(res);

      // * clean up fields
      setChoosenClubId('');
      setParticipantsLimit('');

    }, (err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchClubs();
    fetchVerificationCodesCapacity();
  }, []);

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
        Send Invitations
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
            rows={verificationCodesCapacity}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
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
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px'
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '20px'}}>
            Invite a club
          </Typography>

          <FormControl sx={{width: '250px'}}>
            <InputLabel id="clubFilter" color='secondary' sx={{color: 'secondary.main'}}>Club</InputLabel>

            <Select
              labelId="clubFilter"
              id="ClubsSelector"
              value={choosenClubId}
              label="Club"
              color="secondary"
              onChange={(event) => setChoosenClubId(event.target.value)}
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

          <TextField
            sx={{width: '200px'}}
            label="Participants limit"
            type="number"
            value={participantsLimit}
            color="secondary"
            onChange={(event) => setParticipantsLimit(parseInt(event.target.value))}
          />

          <Button
            sx={{width: '200px', height: '40px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px"}}
            variant="outlined"
            color="secondary"
            onClick={handleSubmit}
          >
            Send invitation
          </Button>

        </Box>
      </Box>
    </Box>
  );
}
