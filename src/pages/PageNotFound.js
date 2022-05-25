import { useNavigate  } from 'react-router-dom';

// * material UI
import { Box, Typography, Button } from "@mui/material";

// * images
import NotFoundImage from "../images/undraw_page_not_found.svg";

// * icons
import HomeIcon from "@mui/icons-material/Home";

import React from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img src={NotFoundImage} alt="homePagePic" style={{ width: "100%" }} />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Page not found.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        We can&apos;t find the page you&apos;re looking for
      </Typography>
      <Box textAlign="center" marginTop="20px">
        <Button variant="contained" color="button" onClick={() => navigate("/")}>
          <HomeIcon sx={{ marginRight: "10px", marginBottom: "2px" }} /> Home
        </Button>
      </Box>
    </Box>
  );
}
