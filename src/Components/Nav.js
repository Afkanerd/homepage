import { Typography, Box, Button, IconButton, Divider } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function DesktopNav() {
  return (
    <>
      <Box
        component="nav"
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "space-between",
          py: 2,
          mx: 5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="/logo.png"
            sx={{ width: { md: "12%", xs: "10%" } }}
          />
          {/* <Typography variant="h6" sx={{ marginLeft: "8px", fontWeight: 600 }}>
          AFKANERD
        </Typography> */}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",

              borderRadius: 7,

              px: 2,
              justifyItems: "space-between",
            }}
          >
            <Button
              sx={{
                mx: 3,
                textTransform: "none",
                color: "whitesmoke",
                fontSize: "18px",
              }}
            >
              HOME
            </Button>
            <Button
              sx={{
                mx: 3,
                textTransform: "none",
                color: "whitesmoke",
                fontSize: "18px",
              }}
            >
              PROJECTS
            </Button>
            <Button
              sx={{
                mx: 3,
                textTransform: "none",
                color: "whitesmoke",
                fontSize: "18px",
              }}
            >
              BLOGS
            </Button>
            <Button
              sx={{
                mx: 3,
                textTransform: "none",
                color: "whitesmoke",
                fontSize: "18px",
              }}
            >
              CONTACT
            </Button>
            <IconButton>
              <FaGithub />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
