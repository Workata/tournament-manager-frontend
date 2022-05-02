import React, { useState, useEffect } from "react";
import { Tournament } from "../models/Tournament";
import { Box, Typography, CircularProgress } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/tournamentInfo.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Moment from 'moment';

export default function TournamentInfo() {
  const [tournamentInfo, setTournamentInfo] = useState();

  useEffect(() => {
    var data = {
      id: 1,
      name: "XYZ Tournament",
      startDate: "2022-05-02",
      endDate: "2022-05-06",
      location: "Some Street, Some City",
    };

    setTournamentInfo(new Tournament(data));
  }, []);

  if (!tournamentInfo) {
    return (
      <Box
        sx={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
          }}
        >
          <CircularProgress sx={{ color: "primary.turquoise" }} />
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        {tournamentInfo.name}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <div>
          <AccessTimeIcon/>
          Starting at: {Moment(tournamentInfo.startDate).format('HH:mm, YYYY-MM-DD')}
        </div>
       
        <div>
          <AccessTimeIcon/>
          Ending at: {Moment(tournamentInfo.endDate).format('HH:mm, YYYY-MM-DD')}
        </div>
        
        <Calendar
          className="torunamentInfo-calendar"
          value={[tournamentInfo.startDate, tournamentInfo.endDate]}
        />
        <LocationOnIcon
          sx={{
            marginTop: "10px"
          }}
        />
        {tournamentInfo.location}
      </Typography>
    </Box>
  );
}
