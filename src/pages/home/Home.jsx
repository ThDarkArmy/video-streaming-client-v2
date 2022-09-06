import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadAllVideosThunk } from "./Home.slice";
import VideoCard from "./VideoCard";

import Sidebar from "../../component/Sidebar";
import { darkbgcolor } from "../../colors/colors";


const Home = () => {
  const dispatch = useDispatch();
  const { videoStatus, videos } = useSelector((state) => state.video);
  
  useEffect(() => {
    dispatch(loadAllVideosThunk());
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex", paddingTop: 10, bgcolor: darkbgcolor }}>
      <Grid container>
        <Grid item xs={0} sm={1.5} md={1} lg={0.8} xl={0.5}>
            <Sidebar/>
        </Grid>
        <Grid item xs={12} sm={10.5} md={11} lg={11.2} xl={11.5}>
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
