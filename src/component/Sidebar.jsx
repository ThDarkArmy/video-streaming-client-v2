import React from "react";
import { Box, Typography, } from "@mui/material";
import {
    Explore as ExploreIcon,
    Home as HomeIcon,
    Subscriptions as SubscriptionsIcon,
    VideoLibrary as VideoLibraryIcon,
  } from "@mui/icons-material";

  import { styled } from "@mui/system";


  const IconButtonContainer = styled("Box")({
    marginBottom: 40,
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  });

const Sidebar = () => {
  return (
    <Box
      style={{
        position: "fixed",
      }}
      sx={{
        display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "center",
        mr: 1,
        paddingLeft: 1,
      }}
    >
      <IconButtonContainer>
        <HomeIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
        <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>
          Home
        </Typography>
      </IconButtonContainer>
      <IconButtonContainer>
        <ExploreIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
        <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>
          Explore
        </Typography>
      </IconButtonContainer>
      <IconButtonContainer>
        <SubscriptionsIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
        <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>
          Subscriptions
        </Typography>
      </IconButtonContainer>
      <IconButtonContainer>
        <VideoLibraryIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
        <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>
          Library
        </Typography>
      </IconButtonContainer>
    </Box>
  );
};

export default Sidebar;
