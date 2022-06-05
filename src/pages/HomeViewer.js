// * material UI
import {
  Box,
  Typography
} from "@mui/material";

// * images
import homePageViewerImage from '../images/undraw_view_technology.svg'

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
          textAlign: 'center'
        }}
      >
        Welcome to the viewer panel, start by browsing menu using sidebar!
      </Typography>

      <img
        src={homePageViewerImage}
        alt="homePagePic"
        style={{ width: '100%'}}
      />
    </Box>
  );
}
