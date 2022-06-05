// * material UI
import {
  Box,
  Typography
} from "@mui/material";

// * images
import homePageClubCeoImage from '../images/undraw_subscriptions.svg'

import React from "react";

export default function HomeViewer() {

  return (
    <Box
      sx={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: "35px"
        }}
      >
        Welcome to the Club CEO panel, start by browsing menu using sidebar!
      </Typography>

      <img
        src={homePageClubCeoImage}
        alt="homePagePic"
        style={{ width: '100%'}}
      />
    </Box>
  );
}
