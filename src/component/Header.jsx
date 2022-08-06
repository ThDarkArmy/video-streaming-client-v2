import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import AddVideoIcon from "@mui/icons-material/VideoCall";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import TitleLogo from "../assets/logo/TitleLogo.png";
import { Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import MusicIcon from "@mui/icons-material/MusicVideo";
import SportsIcon from "@mui/icons-material/SportsSoccer";
import GamesIcon from "@mui/icons-material/SportsEsports";
import MoviesIcon from "@mui/icons-material/LocalMovies";
import NewsIcon from "@mui/icons-material/Announcement";
import LiveIcon from "@mui/icons-material/LiveTv";
import LearningIcon from "@mui/icons-material/Note";
import AboutIcon from "@mui/icons-material/Info";
import PrivacyIcon from "@mui/icons-material/PrivacyTip";
import ContactIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: 50,
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

export default function Header({ home }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const imageClick = () => {};

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: "#1F1A28", display: "flex" }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 55 }}>
          <IconButton
            onClick={handleDrawerClose}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <img
            src={TitleLogo}
            alt="logo"
            onClick={() => imageClick()}
            height="60"
            width="60"
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: -2 }}
            style={{ color: "#fff" }}
          >
            DarkArmy
          </Typography>

          <TextField
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{
              marginLeft: "10%",
              width: "45%",
              borderRadius: 0,
              bgcolor: "#1F1A28",
              fieldset: {
                borderColor: "#404548",
                "&:hover": { borderColor: "green" },
              },
            }}
            inputProps={{
              style: { color: "#fff" },
            }}
          />
          <Button
            disableRipple
            sx={{
              height: 40,
              borderRadius: 0,
              borderColor: "#C4C4C4",
              bgcolor: "#1F1A28",
              "&:hover": { borderColor: "#181A1B" },
              color: "#fff",
            }}
            variant="outlined"
            startIcon={
              <SearchIcon
                style={{ color: "#fff", marginLeft: "30%", fontSize: 20 }}
              />
            }
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton size="large" aria-label="add-video">
              <AddVideoIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton size="large" aria-label="notifications">
              <Badge badgeContent={0} color="error">
                <NotificationsIcon style={{ color: "#fff" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={"menuId"}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle style={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Divider />
          <Divider />
        </Toolbar>
      </AppBar>

      <Drawer
        classes={{ paper: { background: "blue" } }}
        sx={{
          padding: 10,
          bgcolor: "#1F1A28",
          flexShrink: 0,
          width: "220px",
          [theme.breakpoints.down("xs")]: {
            width: "100%",
          },
          "& .MuiDrawer-paper": {
            width: "220px",
            boxSizing: "border-box",
            [theme.breakpoints.down("xs")]: {
              width: "100%",
            },
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader sx={{ marginTop: 0, marginLeft: 0 }}>
          <IconButton
            onClick={handleDrawerClose}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#181A1B" }} />
          </IconButton>

          <img src={TitleLogo} alt="logo" height="60" width="60" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginLeft: -2, marginRight: 0 }}
            style={{ color: "#181A1B" }}
          >
            DarkArmy
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Explore", "Subscriptions"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <ExploreIcon />}
                {index === 2 && <SubscriptionsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Library", "History"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <HistoryIcon />}
                {index === 1 && <VideoLibraryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{ marginTop: 2, marginLeft: 2, fontSize: 14 }}>
          BEST OF DARKARMY
        </Typography>
        <List>
          {[
            "Music",
            "Sports",
            "Gaming",
            "Movies",
            "News",
            "Live",
            "Fashion & Beauty",
            "Learning",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MusicIcon />}
                {index === 1 && <SportsIcon />}
                {index === 2 && <GamesIcon />}
                {index === 3 && <MoviesIcon />}
                {index === 4 && <NewsIcon />}
                {index === 5 && <LiveIcon />}
                {index === 6 && <MusicIcon />}
                {index === 7 && <LearningIcon />}
              </ListItemIcon>
              <ListItemText sx={{ fontSize: 12 }} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{ marginTop: 2, marginLeft: 2, fontSize: 14 }}>
          MORE FROM DARKARMY
        </Typography>
        <List>
          {[
            "Settings",
            "Help",
            "Send Feedback",
            "About",
            "Contact Us",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <SettingsIcon />}
                {index === 1 && <HelpIcon />}
                {index === 2 && <FeedbackIcon />}
                {index === 3 && <AboutIcon />}
                {index === 4 && <ContactIcon />}
                {index === 5 && <PrivacyIcon />}
                {index === 6 && <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

// 6363316050
