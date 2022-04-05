import React from "react";
// * material UI
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box
} from "@mui/material";

import "../css/general.css";

// * navigation
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// * icons
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


// const tokenValue = false;     // TODO change this later on
// const currentURL = useLocation();

export default function Appbar(props) {

  const handleDrawerOpen = () => {
    props.setOpenDrawer(true);
  };

  const handleOpenSignIn = () => {
    props.setOpenSignIn(true);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          // * calculate appbar size
          width: props.openDrawer ? `calc(100% - ${props.drawerWidth}px)` : '100%',
          marginLeft: props.openDrawer ? `${props.drawerWidth}px` : '0px'
        }}
      >
        <Toolbar
          sx={{
            // * appbar color here
            bgcolor: 'primary.turquoise'
          }}
        >
          {/* Sidebar button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ color: 'primary.main', mr: 2, ...(props.openDrawer && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* App title with a link to the home page */}
          <Link
            to="/"
            className="link"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main'
              }}
            >
              Tournament App
            </Typography>
            <SportsKabaddiIcon
              sx={{
                marginTop: '5px',
                marginLeft: '5px',
                color: 'primary.main',
              }}
            />
          </Link>

          {/* Sing in buttton */}
          <IconButton onClick={handleOpenSignIn}>
            <PersonIcon
              sx={{
                marginRight: '5px',
                color: 'primary.main',
              }}
            />
              <Typography
                variant="h6"
                sx={{
                color: 'primary.main'
                }}
              >
              Sign in
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// TODO define correct prop types
Appbar.propTypes = {
  setOpenDrawer: PropTypes.any,
  openDrawer: PropTypes.any,
  drawerWidth: PropTypes.any,
  setOpenSignIn: PropTypes.any
}