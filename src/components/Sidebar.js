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
import React, {useContext} from "react";

// * navigation
import { useNavigate} from "react-router-dom";

// * icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MailIcon from '@mui/icons-material/Mail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { AppContext } from '../contexts/AppContext';

// * Documentation: https://mui.com/components/drawers/#persistent-drawer


export default function Sidebar(props) {

  const theme = useTheme();
  let navigate = useNavigate();
  const { tokenValue } = useContext(AppContext)

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
            <GroupIcon/>
          </ListItemIcon>
          <ListItemText primary={"Participants"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/addParticipants")} }>
          <ListItemIcon>
            <GroupAddIcon/>
          </ListItemIcon>
          <ListItemText primary={"Add participants"} />
        </ListItem>

        {tokenValue &&
        <ListItem button onClick={ () => {return navigate("/categories")} }>
          <ListItemIcon>
            <AccessibilityIcon/>
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItem>
        }

        <ListItem button onClick={ () => {return navigate("/clubs")} }>
          <ListItemIcon>
            <WorkspacesIcon/>
          </ListItemIcon>
          <ListItemText primary={"Clubs"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/invitations")} }>
          <ListItemIcon>
            <MailIcon/>
          </ListItemIcon>
          <ListItemText primary={"Invitations"} />
        </ListItem>

      </List>

      <Divider />

      <List>
      <ListItem button onClick={ () => {return navigate("/managementPanel")} }>
          <ListItemIcon>
            <AdminPanelSettingsIcon/>
          </ListItemIcon>
          <ListItemText primary={"Management panel"} />
        </ListItem>
        <ListItem button onClick={ () => {return navigate("/tournamentInfo")} }>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary={"About tournament"} />
        </ListItem>

        <ListItem button onClick={ () => {return navigate("/appInfo")} }>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary={"About application"} />
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