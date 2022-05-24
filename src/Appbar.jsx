import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function ButtonAppBar(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        bgcolor: "#white",
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

/*
<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
           //onClick={handleDrawerToggle} 
            sx={{ mr: 2, display: { sm: 'none' } }}
          >

*/
