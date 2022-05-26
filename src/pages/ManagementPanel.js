// * material UI
import { Box, Typography, Button } from "@mui/material";

// * icons
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import React from "react";

import { generateTrees } from "../services/treeService";

import "../css/managementPanel.css";

export default function ManagementPanel() {
  const handleGenerateTrees = () => {
    generateTrees(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="management-container">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Management panel
      </Typography>
      <div className="management-container-image">
        <Box
          sx={{
            width: "300px",
            height: "200px",
            backgroundColor: "primary.main",
            boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
            padding: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            Brackets manager
          </Typography>
          <Box textAlign="center" marginTop="20px">
            <Button
              variant="contained"
              color="button"
              onClick={() => handleGenerateTrees()}
            >
              <AccountTreeIcon
                sx={{ marginRight: "10px", marginBottom: "2px" }}
              />{" "}
              Generate brackets
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
