import React, {useState} from "react";
// * material UI
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * components
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"
import { styled } from '@mui/material/styles';

// * pages
import Home from "./pages/Home";

function App() {

  const [openDrawer, setOpenDrawer] = useState(false);

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
        />

        <Sidebar
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          drawerWidth={drawerWidth}
        />

        <Main open={openDrawer}>
          <Routes>
            <Route exact path="/" element={<Home />} />
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

export default App;
