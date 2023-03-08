import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        bgcolor: "#white",
      }}
    >
      <AppBar position="static" style={{ background: '#08081b' }} >
        <Toolbar >
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
