import React, {useState, useEffect} from "react";

// * material UI
import {
  Box,
} from "@mui/material";

import { DataGrid } from '@mui/x-data-grid';
import CategoryFilter from '../components/CategoryFilter';

// * services
import { getParticipants } from "../services/participantService";

//  * models
import { Participant } from "../models/Participant";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of birth',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 110,
    editable: false,
  },
  {
    field: 'country',
    headerName: 'Country',
    description: 'Country',
    sortable: false,
    width: 160,
  },
  {
    field: 'club',
    headerName: 'Club',
    description: 'Club',
    sortable: true,
    width: 250,
  },
  {
    field: 'category',
    headerName: 'Category',
    description: 'Category',
    sortable: true,
    width: 250,
  },
];

export default function Participants() {

  const [participants, setParticipants] = useState();

  useEffect(() => {
    getParticipants((res) => {
      let participantsObjects = res.data.map(
        (participantJson) => new Participant(participantJson)
      );

      // * modify participants to fit rows
      participantsObjects.forEach(
        (participantObject) => {
          participantObject.club = participantObject.club.name
          participantObject.category = participantObject.category.name
        }
      );

      setParticipants(participantsObjects);
    }, (err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <Box sx={{marginBottom: '20px'}}>
        <CategoryFilter/>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '90%',
          backgroundColor: 'primary.main',
          boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        }}
      >
        <DataGrid
          rows={participants}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}

