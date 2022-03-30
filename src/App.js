import React from "react";
// * material UI
import { Box } from "@mui/material";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * components
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

// * pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Appbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Box>

    </Router>
  );
}

export default App;
