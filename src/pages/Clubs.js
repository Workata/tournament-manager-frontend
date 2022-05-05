import React, {useState, useEffect} from "react";

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
  }
];

export default function Categories() {

  // * states needed to craete a new cateogry
  const [name, setName] = useState('');
  const [ceo, setCeo] = useState('');

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
    let body = {name: name, ceo: ceo}

    createClub(body, (res) => {
      console.log(res);

      // * clean up fields
      setName("");
      setCeo("");

      // * fetch clubs again to have updated list
      fetchClubs();
    }, (err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchClubs();
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
            width: '600px',
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
            height: '400px',
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
            color="secondary"
            onChange={ (event) => { setName(event.target.value)} }
          />

          <TextField
            sx={{width: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px"}}
            label="CEO"
            type="text"
            color="secondary"
            onChange={ (event) => { setCeo(event.target.value)} }
          />

        <Button
          sx={{width: '100px', height: '40px', marginLeft: 'auto', marginRight: 'auto', marginTop: "40px"}}
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>

        </Box>
      </Box>
    </Box>
  );
}
