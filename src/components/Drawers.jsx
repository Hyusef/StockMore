import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logostock from "../images/logostock.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CompareIcon from "@mui/icons-material/Compare";
import FeedIcon from "@mui/icons-material/Feed";
import { Link } from "react-router-dom";
import styled from "styled-components";
const drawerWidth = 240;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #d4d7e6;
  margin-left: 2px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function Drawers(props) {
  const drawer = (
    <Box>
      <img
        alt="logo"
        src={logostock}
        style={{ width: "200px", padding: "10px", }}
      ></img>
      <Divider sx={{ bgcolor: "#4f4f4f" }} />
      <List>
        <ListItem button onClick={props.toggleDrawer(false)}>
          <StyledLink to="/">
            <ListItemIcon sx={{ color: "#d4d7e6" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </StyledLink>
        </ListItem>

        <StyledLink to="/add">
          <ListItem button onClick={props.toggleDrawer(false)}>
            <ListItemIcon sx={{ color: "#d4d7e6" }}>
              <LightbulbIcon />
            </ListItemIcon>
            <ListItemText primary="Add Stock" />
          </ListItem>
        </StyledLink>

        <StyledLink to="/compare">
          <ListItem button onClick={props.toggleDrawer(false)}>
            <ListItemIcon sx={{ color: "#d4d7e6" }}>
              <CompareIcon />
            </ListItemIcon>
            <ListItemText primary="Compare" />
          </ListItem>
        </StyledLink>

        <StyledLink to="/news">
          <ListItem button onClick={props.toggleDrawer(false)}>
            <ListItemIcon sx={{ color: "#d4d7e6" }}>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
        </StyledLink>
      </List>
    </Box>
  );
  return (
    <Box>
      <Drawer
        anchor="left"
        variant="temporary"
        open={props.open}
        onClose={props.toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          flexShrink: 0,
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#08081b",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            flexShrink: "0",
            bgcolor: "#08081b",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
