// * material UI
import {
  Box,
  Typography
} from "@mui/material";

// * images
import homePageAdminImage from '../images/undraw_product_iteration.svg'

import React from "react";

export default function HomeAdmin() {

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
        Welcome to the admin panel, start by browsing menu using sidebar!
      </Typography>

      <img
        src={homePageAdminImage}
        alt="homePagePic"
        style={{ width: '100%'}}
      />
    </Box>
  );
}
