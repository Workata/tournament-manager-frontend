import React, { useState, useEffect } from "react";
import { Tournament } from "../models/Tournament";
import { Box, Typography, CircularProgress } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/tournamentInfo.css";
import Moment from "moment";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function TournamentInfo() {
  const [tournamentInfo, setTournamentInfo] = useState();

  useEffect(() => {
    var data = {
      id: 1,
      name: "Tournament example",
      startDate: "2022-05-02",
      endDate: "2022-05-06",
      location: "Some Street, Some City",
      phoneNumber: "+48 723 612 021",
      email: "test@email.com"
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
          marginBottom: "20px",
        }}
      >
        {tournamentInfo.name}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "10px",
        }}
      >
        <div className="torunamentInfo-wrapper">
          <div className="torunamentInfo-block-left">
            <div>
              {/*Tournament dates*/}
              <AccessTimeIcon
                sx={{
                  color: "primary.turquoise",
                  float: "left",
                  marginTop: "4px",
                }}
              />
              <ul>
                <li>
                  Starting at:{" "}
                  {Moment(tournamentInfo.startDate).format("HH:mm, YYYY-MM-DD")}
                </li>
                <li>
                  Ending at:{" "}
                  {Moment(tournamentInfo.endDate).format("HH:mm, YYYY-MM-DD")}
                </li>
              </ul>
            </div>

            {/*Tournament location*/}
            <LocationOnIcon
              sx={{
                marginTop: "4px",
                color: "primary.turquoise",
                float: "left",
              }}
            />
            <ul>
              <li>{tournamentInfo.location}</li>
            </ul>

            {/*Tournament phone number*/}
            {tournamentInfo.phoneNumber && (
              <>
                <PhoneIcon
                  sx={{
                    marginTop: "4px",
                    color: "primary.turquoise",
                    float: "left",
                  }}
                />
                <ul>
                  <li>{tournamentInfo.phoneNumber}</li>
                </ul>
              </>
            )}

             {/*Tournament email*/}
             {tournamentInfo.email && (
              <>
                <AlternateEmailIcon
                  sx={{
                    marginTop: "4px",
                    color: "primary.turquoise",
                    float: "left",
                  }}
                />
                <ul>
                  <li>{tournamentInfo.email}</li>
                </ul>
              </>
            )}

          </div>
          <div className="torunamentInfo-block-right">
            <Calendar
              className="torunamentInfo-calendar"
              value={[tournamentInfo.startDate, tournamentInfo.endDate]}
            />
          </div>
        </div>
      </Typography>
    </Box>
  );
}