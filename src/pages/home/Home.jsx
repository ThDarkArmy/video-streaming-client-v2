import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadAllVideosThunk } from "./Home.slice";
import VideoCard from "./VideoCard";
import {
  Explore as ExploreIcon,
  Home as HomeIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@mui/icons-material";

import { styled } from "@mui/system";
import Header from "../../component/Header";

const IconButtonContainer = styled("Box")({
 marginBottom: 40,
  marginTop: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
});

const Home = () => {
  const dispatch = useDispatch();
  const { videoStatus, videos } = useSelector((state) => state.video);
  useEffect(() => {
    dispatch(loadAllVideosThunk());
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex", mt: 10 }}>
      
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={0.8} xl={0.5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "top",
              alignItems: "center",
              mr: 1,
            }}
          >
            <IconButtonContainer
            >
              <HomeIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
              <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>
                Home
              </Typography>
            </IconButtonContainer>
            <IconButtonContainer
              
            >
              <ExploreIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
              <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>Explore</Typography>
            </IconButtonContainer>
            <IconButtonContainer
              
            >
              <SubscriptionsIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
              <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>Subscriptions</Typography>
            </IconButtonContainer>
            <IconButtonContainer
              
            >
              <VideoLibraryIcon sx={{ fontSize: 30, color: "#C0C0C0" }} />
              <Typography sx={{ fontSize: 10 }} style={{ color: "#C0C0C0" }}>Library</Typography>
            </IconButtonContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={11} md={11} lg={11.2} xl={11.5}>
          <Box>
            <Grid container spacing={2} alignContent="center">
              {videoStatus === "success" &&
                videos.body.map((video) => (
                  <Grid
                    item
                    key={video._id}
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={2}
                  >
                    <VideoCard videoData={video} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
