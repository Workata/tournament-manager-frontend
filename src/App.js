import React, {useState, useEffect, useContext} from "react";
// * material UI
import { Box, CircularProgress } from "@mui/material";
import { styled } from '@mui/material/styles';

// * navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * components
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";

// * pages
import Home from "./pages/Home";
import Brackets from "./pages/Brackets";
import Participants from "./pages/Participants";
import AddParticipants from "./pages/AddParticipants";
import Standings from "./pages/Standings";
import TournamentInfo from "./pages/TournamentInfo";
import Categories from "./pages/Categories";
import Clubs from "./pages/Clubs";

// * utils
import {handleAxios} from "./utils/ConfigHandler";
import { AppContext } from './contexts/AppContext';

function App() {
  const { getTokenCookie, tokenValue, setTokenValue } = useContext(AppContext)

  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openSignIn, setOpenSignIn] = useState(false);

  const drawerWidth = 240;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      ...(!open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  // * on App load:
  useEffect(() => {
    // * load config file to axios (baseUrl for endpoints)
    handleAxios(setIsLoading);

    // * verify if cookie with token exists
    if (!tokenValue) { setTokenValue(getTokenCookie('token')) }
  }, [])

  if(!isLoading) {
  return (
    <Router>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Appbar
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          drawerWidth={drawerWidth}
          setOpenSignIn={setOpenSignIn}
        />

        <Sidebar
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          drawerWidth={drawerWidth}
        />

        <SignIn
          openSignIn={openSignIn}
          setOpenSignIn={setOpenSignIn}
        />

        <Main open={openDrawer}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/brackets" element={<Brackets />} />
            <Route exact path="/participants" element={<Participants />} />
            <Route exact path="/addParticipants" element={<AddParticipants />} />
            <Route exact path="/standings" element={<Standings/>} />
            <Route exact path="/tournamentInfo" element={<TournamentInfo/>} />
            <Route exact path="/categories" element={<Categories/>} />
            <Route exact path="/clubs" element={<Clubs/>} />
          </Routes>
        </Main>

        <Footer
          openDrawer={openDrawer}
          drawerWidth={drawerWidth}
        />
      </Box>

    </Router>
  );
  }
  return (<CircularProgress sx={{ color: "primary.turquoise" }} />)
}

export default App;
