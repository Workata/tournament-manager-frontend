// * material UI
import { Box, Typography } from "@mui/material";

// * images
import homePageImage from '../images/undraw_finish_line_katerina_limpitsouni_xy20.svg'

import React from "react";

export default function Home() {
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
        Easy to use, open source, high performance and reliable!
      </Typography>
      <img
        src={homePageImage}
        alt="homePagePic"
        style={{ width: '100%'}}
      />
    </Box>
  );
}
