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
import { createCategory, getCategories } from "../services/categoryService";

//  * models
import { Category } from "../models/Category";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
    editable: false,
  }
];

export default function Categories() {

  // * states needed to craete a new cateogry
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // * state for all categories from the DB
  const [categories, setCategories] = useState();

  const fetchCategories = () => {
    getCategories((res) => {
      let categoriesObjects = res.data.map(
        (categoryJson) => new Category(categoryJson)
      );
      setCategories(categoriesObjects);
    }, (err) => {
      console.log(err);
    });
  }

  const handleSubmit = () => {
    // TODO data valdiation
    let body = {name: name, description: description}

    createCategory(body, (res) => {
      console.log(res);

      // * clean up fields
      setName("");
      setDescription("");

      // * fetch categories again to have updated list
      fetchCategories();
    }, (err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchCategories();
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
        Manage Categories
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
            rows={categories}
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
            Create a category
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
            label="Description"
            type="text"
            color="secondary"
            onChange={ (event) => { setDescription(event.target.value)} }
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
