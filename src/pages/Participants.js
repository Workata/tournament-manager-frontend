import React from "react";

// * material UI
import {
  Box,
} from "@mui/material";

import { DataGrid } from '@mui/x-data-grid';
import CategoryFilter from '../components/CategoryFilter';

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
    field: 'age',
    headerName: 'Age',
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
];

const rows = [
  { id: 1, lastName: 'Kowalski', firstName: 'Jan', age: 35, club: 'WKS Śląsk Wrocław', country: 'Poland', gender: 'Male' },
  { id: 2, lastName: 'Nowak', firstName: 'Alisa', age: 25, club: 'Śląsk Wrocław Koszykarski', country: 'Poland', gender: 'Female' },
  { id: 3, lastName: 'Malinowski', firstName: 'Jakub', age: 18, club: 'Betard Sparta Wrocław', country: 'Poland', gender: 'Male' },
  { id: 4, lastName: 'Zielińska', firstName: 'Dorota', age: 21, club: 'Panthers Wrocławw', country: 'Poland', gender: 'Female' },
  { id: 5, lastName: 'Krawczyk', firstName: 'Bruno', age: 27, club: 'Polonia Wrocław', country: 'Poland', gender: 'Male' },
  { id: 6, lastName: 'Maciejewska', firstName: 'Julia', age: 24, club: 'Gwardia Wrocław', country: 'Poland', gender: 'Female' },
  { id: 7, lastName: 'Pawlak', firstName: 'Franciszek', age: 25, club: 'Klub Kendo RyuShinKai', country: 'Poland', gender: 'Male' },
  { id: 8, lastName: 'Zalewska', firstName: 'Izabela', age: 29, club: 'Klub Sportowy Gym-Fight', country: 'Poland', gender: 'Female' },
  { id: 9, lastName: 'Ostrowski', firstName: 'Mateusz', age: 22, club: 'UKS Żeglarz', country: 'Poland', gender: 'Male' },
];

export default function Participants() {

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
          rows={rows}
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

