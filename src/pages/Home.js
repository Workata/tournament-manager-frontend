// * material UI
import {
  Box,
  Typography,
  Button
} from "@mui/material";

// * images
import homePageImage from '../images/undraw_finish_line_katerina_limpitsouni_xy20.svg'

// * navigation
import { useNavigate} from "react-router-dom";

import React from "react";

export default function Home() {

  const navigate = useNavigate();

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

      <Box
        sx = {{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "red"

          marginTop: "20px",
          marginBottom: "20px"

        }}
      >
        <Button
          variant="contained"
          color="button"
          onClick={() => {return navigate("/viewer")}}
        >
          Viewer panel
        </Button>

        <Button
          variant="contained"
          color="button"
          onClick={() => {return navigate("/clubceo")}}
        >
          Club CEO panel
        </Button>

        <Button
          variant="contained"
          color="button"
          onClick={() => {return navigate("/admin")}}
        >
          Admin panel
        </Button>

      </Box>

      <img
        src={homePageImage}
        alt="homePagePic"
        style={{ width: '100%'}}
      />
    </Box>
  );
}
