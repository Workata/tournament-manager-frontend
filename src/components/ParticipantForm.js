import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { AddParticipant } from "../models/AddParticipant";

// * material UI
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

// needed for date of birth input
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// * services
import { getCategories } from "../services/categoryService";

//  * models
import { Category } from "../models/Category";

export default function ParticipantForm(props) {
  // TODO code refactor

  // eslint-disable-next-line no-unused-vars
  const [firstName, setFirstName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState("");

  // Selection fields
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState(""); // * current selected category
  const [categories, setCategories] = useState(); // * all categories

  const handleFieldChange = (fieldName, fieldValue) => {
    props.participant[fieldName] = fieldValue;
  };

  useEffect(() => {
    getCategories(
      (res) => {
        let categoriesObjects = res.data.map(
          (categoryJson) => new Category(categoryJson)
        );
        setCategories(categoriesObjects);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "300px",
        height: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        backgroundColor: "primary.main",
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        padding: "20px",
        position: "relative",
      }}
    >
      <div>
        <Typography variant="h6">{props.formId}.</Typography>

        <FormControl sx={{ color: "secondary", width: "255px" }}>
          <TextField
            sx={{ marginTop: "15px" }}
            label="First name"
            autoComplete="new-password"
            type="text"
            color="secondary"
            onChange={(event) => {
              let value = event.target.value;
              setFirstName(value);
              handleFieldChange("firstName", value);
            }}
          />

          <TextField
            sx={{ marginTop: "15px" }}
            label="Last name"
            type="text"
            color="secondary"
            onChange={(event) => {
              let value = event.target.value;
              setLastName(value);
              handleFieldChange("lastName", value);
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date of birth"
              inputFormat="dd/MM/yyyy"
              value={dateOfBirth || null}
              onChange={(newDateOfBirth) => {
                setDateOfBirth(newDateOfBirth);
                handleFieldChange("dateOfBirth", newDateOfBirth);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    marginTop: "15px",
                    color: "secondary.main",
                  }}
                  color="secondary"
                  InputLabelProps={{
                    style: { color: "#000" },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <TextField
            sx={{ marginTop: "15px" }}
            label="Country"
            type="text"
            color="secondary"
            // * tun off autocomplete
            autoComplete="new-password"
            onChange={(event) => {
              let value = event.target.value;
              setCountry(value);
              handleFieldChange("country", value);
            }}
          />

          <FormControl sx={{ color: "secondary", marginTop: "15px" }}>
            <InputLabel
              id="genderSelectLabel"
              color="secondary"
              sx={{ color: "secondary.main" }}
            >
              Gender
            </InputLabel>
            <Select
              labelId="genderSelectLabel"
              value={gender}
              label="Gender"
              onChange={(event) => {
                let value = event.target.value;
                setGender(value);
                handleFieldChange("gender", value);
              }}
              color="secondary"
            >
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"M"}>Male</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ color: "secondary", marginTop: "15px" }}>
            <InputLabel
              id="categoryFilter"
              color="secondary"
              sx={{ color: "secondary.main" }}
            >
              Category
            </InputLabel>

            <Select
              labelId="categoryFilter"
              id="CategoriesSelector"
              value={category}
              label="Category"
              color="secondary"
              onChange={(event) => {
                let value = event.target.value;
                setCategory(value);
                handleFieldChange("category", value);
              }}
            >
              {categories &&
                categories.map((category) => {
                  return (
                    <MenuItem key={category.id} value={parseInt(category.id)}>
                      {category.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </FormControl>
      </div>
      {!props.firstForm && (
        <DeleteOutlineRoundedIcon
          sx={{
            fontSize: "70px",
            color: "delete.main",
            bottom: "2%",
            position: "absolute",
            left: "auto",
            right: "40%",
          }}
          onClick={() => props.handleDeleteForm(props.participant.tempId)}
        />
      )}
    </Box>
  );
}

// TODO define correct prop types
ParticipantForm.propTypes = {
  formId: PropTypes.any,
  allForms: PropTypes.any,
  setAllForms: PropTypes.any,
  participant: AddParticipant,
  handleDeleteForm: PropTypes.func,
  firstForm: PropTypes.bool
};
