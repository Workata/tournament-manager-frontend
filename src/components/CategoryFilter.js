import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import PropTypes from 'prop-types';

// * services
import { getCategories } from "../services/categoryService";

//  * models
import { Category } from "../models/Category";


export default function CategoryFilter(props) {
  const [category, setCategory] = useState('');     // * current selected category
  const [categories, setCategories] = useState(); // * all categories


  useEffect(() => {
    getCategories((res) => {
      let categoriesObjects = res.data.map(
        (categoryJson) => new Category(categoryJson)
      );
      setCategories(categoriesObjects);
    }, (err) => {
      console.log(err);
    });
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        width: '430px',
        padding: '10px'
      }}
    >
      <FormControl sx={{width: '300px'}}>
        <InputLabel id="categoryFilter" color='secondary' sx={{color: 'secondary.main'}}>Category</InputLabel>

        <Select
          labelId="categoryFilter"
          id="CategoriesSelector"
          value={category}
          label="Category"
          color="secondary"
          onChange={(event) => {
            setCategory(event.target.value);
            // pass category id to parent
            props.setChoosenCategoryId(event.target.value);
          }}
        >
          {
            categories && categories.map((category) => {
              return(
                <MenuItem key={category.id} value={parseInt(category.id)}>{category.name}</MenuItem>
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
          onClick={() => {}}
        >
          View
        </Button>

    </Box>
  )
}

// TODO define correct prop types
CategoryFilter.propTypes = {
  setChoosenCategoryId: PropTypes.any
}
