import React, {useState, useEffect, useContext} from "react";
// * material UI
import { Box, CircularProgress } from "@mui/material";
import { styled } from '@mui/material/styles';

// * navigation
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// * components
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";

// * pages
import Home from "./pages/Home";
import HomeViewer from "./pages/HomeViewer";
import HomeAdmin from "./pages/HomeAdmin";
import HomeClubCeo from "./pages/HomeClubCeo";
import Brackets from "./pages/Brackets";
import Participants from "./pages/Participants";
import AddParticipants from "./pages/AddParticipants";
import Standings from "./pages/Standings";
import TournamentInfo from "./pages/TournamentInfo";
import Categories from "./pages/Categories";
import Clubs from "./pages/Clubs";
import Invitations from "./pages/Invitations";
import PageNotFound from "./pages/PageNotFound";
import ManagementPanel from "./pages/ManagementPanel";

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
            {/* Home pages */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/viewer" element={<HomeViewer />} />
            <Route exact path="/admin" element={<HomeAdmin />} />
            <Route exact path="/clubceo" element={<HomeClubCeo />} />

            <Route exact path="/viewer/brackets" element={<Brackets />} />
            <Route exact path="/viewer/participants" element={<Participants />} />
            <Route exact path="/viewer/standings" element={<Standings/>} />

            <Route exact path="/clubceo/addParticipants" element={<AddParticipants />} />
            <Route exact path="/clubceo/clubs" element={<Clubs/>} />

            <Route exact path="/admin/categories" element={<Categories/>} />
            <Route exact path="/admin/management" element={<ManagementPanel/>} />
            <Route exact path="/admin/invitations" element={<Invitations/>} />


            <Route exact path="/tournamentInfo" element={<TournamentInfo/>} />


            <Route path="*" element={<PageNotFound/>} />
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
