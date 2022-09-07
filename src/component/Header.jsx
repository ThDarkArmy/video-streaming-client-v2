import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Avatar,
  useMediaQuery,
  Menu,
  MenuItem
} from "@mui/material";

import Title1 from "../assets/logo/title1.png";
import Title2 from "../assets/logo/title2.png";
import Title3 from "../assets/logo/title3.png";
import Title4 from "../assets/logo/title4.png";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddVideoIcon from "@mui/icons-material/VideoCall";
import { styled, useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
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
import Search from "./Search";
import { darkbgcolor } from "../colors/colors";
import { logout } from "../pages/authentication/Authentication.slice";
import { useDispatch } from "react-redux";
import CreateEditChannel from "../pages/channel/CreateEditChannel";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: 50,
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const handleProfileMenuClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.clear();
    handleProfileMenuClose();
  }

  const createChannel = () => {

  }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false);
  }


  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: darkbgcolor, display: "flex" }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 55, mt: 0 }}>
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

          <Box
            onClick={() => navigate("/")}
            component="img"
            src={Title1}
            sx={{
              height: 14,
              cursor: "pointer",
              ml: 1,
            }}
            alt="DARKARMY"
          />
          {isMobile && <Box sx={{ flexGrow: 1 }} />}
          <Box sx={{ml: "10vw"}}>
            <Search />
          </Box>
          {!isMobile && <Box sx={{ flexGrow: 1 }} />}
          {localStorage.getItem("JWT_TOKEN") ? (
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
                onClick={handleProfileMenuClick}
              >
                <Avatar
                  variant="circle"
                  sx={{
                    bgcolor: "#403C48",
                    color: "#fff",
                    fontSize: 15,
                    height: 30,
                    width: 30,
                  }}
                >
                  {localStorage.getItem("FULL_NAME")?.substring(0,1)}
                </Avatar>
              </IconButton>
              <Menu
            id="basic-menu"
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={()=>{
              if(localStorage.getItem("CHANNEL")){
               return navigate(`/channel/${localStorage.getItem("CHANNEL")}`)
              }else{
                createChannel();
              }
            }}>{localStorage.getItem("CHANNEL") ? "Channel" : "Create Channel"}</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={()=> logoutUser()}>Logout</MenuItem>
          </Menu>
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={()=> navigate("/authentication")}
              style={{
                color: "white",
                background: "#403C48",
                border: "none",
                "&:hover": { border: "1px solid white" },
              }}
            >
              Login
            </Button>
          )}
          <Divider />
          <Divider />
        </Toolbar>
      </AppBar>

      <Drawer
        PaperProps={{
          sx: {
            bgcolor: darkbgcolor,
            color: "#fff",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader
          sx={{
            mt: 1,
            marginLeft: 0,
            position: "fixed",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleDrawerClose}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, ml: 0.1 }}
          >
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Box
            // onClick={() => navigate("/")}
            component="img"
            src={Title1}
            sx={{
              height: 14,
              cursor: "pointer",
              ml: "auto",
            }}
            alt="DARKARMY"
          />
        </DrawerHeader>
        <Divider sx={{ mt: 7 }} />
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            height: 700,
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <List>
            {["Home", "Explore", "Subscriptions"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon sx={{ color: "#fff" }} />}
                  {index === 1 && <ExploreIcon sx={{ color: "#fff" }} />}
                  {index === 2 && <SubscriptionsIcon sx={{ color: "#fff" }} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Profile", "Channel", "Logout"].map((text, index) => (
              <ListItem onClick={()=> {
                if(text==="Channel"){
                  alert("alert")
                  setOpenFormDialog(true);
                }
              }} button key={text}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon sx={{ color: "#fff" }} />}
                  {index === 1 && <ExploreIcon sx={{ color: "#fff" }} />}
                  {index === 2 && <SubscriptionsIcon sx={{ color: "#fff" }} />}
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
                  {index === 0 && <HistoryIcon sx={{ color: "#fff" }} />}
                  {index === 1 && <VideoLibraryIcon sx={{ color: "#fff" }} />}
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
                  {index === 0 && <MusicIcon sx={{ color: "#fff" }} />}
                  {index === 1 && <SportsIcon sx={{ color: "#fff" }} />}
                  {index === 2 && <GamesIcon sx={{ color: "#fff" }} />}
                  {index === 3 && <MoviesIcon sx={{ color: "#fff" }} />}
                  {index === 4 && <NewsIcon sx={{ color: "#fff" }} />}
                  {index === 5 && <LiveIcon sx={{ color: "#fff" }} />}
                  {index === 6 && <MusicIcon sx={{ color: "#fff" }} />}
                  {index === 7 && <LearningIcon sx={{ color: "#fff" }} />}
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
                  {index === 0 && <SettingsIcon sx={{ color: "#fff" }} />}
                  {index === 1 && <HelpIcon sx={{ color: "#fff" }} />}
                  {index === 2 && <FeedbackIcon sx={{ color: "#fff" }} />}
                  {index === 3 && <AboutIcon sx={{ color: "#fff" }} />}
                  {index === 4 && <ContactIcon sx={{ color: "#fff" }} />}
                  {index === 5 && <PrivacyIcon sx={{ color: "#fff" }} />}
                  {index === 6 && <HomeIcon sx={{ color: "#fff" }} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>
      <CreateEditChannel openFormDialog = { openFormDialog } handleCloseFormDialog={handleCloseFormDialog}/>
    </Box>
  );
}
