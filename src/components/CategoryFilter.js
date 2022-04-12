import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CategoryFilter() {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
          id="demo-simple-select"
          value={category}
          label="Category"
          color="secondary"
          onChange={handleChange}
        >
          <MenuItem value={1}>Category A</MenuItem>
          <MenuItem value={2}>Category B</MenuItem>
          <MenuItem value={3}>Category C</MenuItem>
          <MenuItem value={4}>Category D</MenuItem>
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
