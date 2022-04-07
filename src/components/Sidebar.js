// * material UI
import {Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

// * others
import PropTypes from 'prop-types';
import React from "react";

// * navigation
import { useNavigate } from "react-router-dom";

// * icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

// * Documentation: https://mui.com/components/drawers/#persistent-drawer


export default function Sidebar(props) {

  const theme = useTheme();
  let navigate = useNavigate();

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };


  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: props.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.openDrawer}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      {/* TODO change ListItem for component */}
      <List>
        <ListItem button onClick={ () => {return navigate("/")} }>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/brackets")} }>
          <ListItemIcon>
            <AccountTreeIcon/>
          </ListItemIcon>
          <ListItemText primary={"Brackets"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/standings")} }>
          <ListItemIcon>
            <EmojiEventsIcon/>
          </ListItemIcon>
          <ListItemText primary={"Standings"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/participants")} }>
          <ListItemIcon>
            <GroupAddIcon/>
          </ListItemIcon>
          <ListItemText primary={"Participants"} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button onClick={ () => {return navigate("/info")} }>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary={"Tournament Info"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/info")} }>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary={"Application Info"} />
        </ListItem>
      </List>

    </Drawer>
  )
}

// TODO define correct prop types
Sidebar.propTypes = {
  setOpenDrawer: PropTypes.any,
  openDrawer: PropTypes.any,
  drawerWidth: PropTypes.any
}