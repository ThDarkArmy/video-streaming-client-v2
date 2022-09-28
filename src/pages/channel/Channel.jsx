import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../../component/Sidebar";
import {
  darkbgcolor,
  darkchannelnamecolor,
  darktitlecolor,
} from "../../colors/colors";
import Playlist from "./Playlist";
import VideoCard from "../home/VideoCard";
import PlaylistCard from "./PlaylistCard";
import AboutChannel from "./AboutChannel";
import { useParams } from "react-router-dom";
import { getChannelThunk, getChannelVideosThunk, getAllPlaylistByChannelThunk } from "./Channel.slice";
import CreateEditChannel from "./CreateEditChannel";
import PlaylistCreateIcon from '@mui/icons-material/PlaylistAdd';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Channel = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [editChannelData, setEditChannelData] = useState();
  const [openFormDialog, setOpenFormDialog] = useState(false);

  const { channelId } = useParams();

  const dispatch = useDispatch();

  const {
    channel,
    getChannelStatus,
    channelVideos,
    channelVideosStatus,
    playlists,
    getAllPlaylistStatus,
  } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(getChannelThunk(channelId));
    dispatch(getAllPlaylistByChannelThunk(channelId));
    dispatch(getChannelVideosThunk(channelId))
    // loadChannel(channelId, channelVideosCallback);
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getChannelVideosThunk(channelId));
  // }, []);

  useEffect(() => {
    if(channelVideosStatus==="success"){
      console.log("Videos:", channelVideos);
    }
  },[channelVideosStatus])

  useEffect(() => {
    if (getChannelStatus == "success") {
      // console.log(channel);
    }
  }, [getChannelStatus, getAllPlaylistStatus]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadChannel = (channelId, channelVideosCallback) => {
    dispatch(getChannelThunk(channelId))
    if(typeof channelVideosCallback === 'function') channelVideosCallback(channelId);
  }

  const channelVideosCallback = (channelId) => {
    dispatch(getChannelVideosThunk(channelId))
  }

  // const getAllPlaylistByChannel = (channelId) => {
  //   dispatch(getAllPlaylistByChannelThunk(channelId));
  // }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false);
    setEditChannelData(null);
  }

  return (
    <Box sx={{ display: "flex", paddingTop: 8, bgcolor: darkbgcolor }}>
      <Grid container>
        <Grid item xs={0} sm={1.5} md={1} lg={0.8} xl={0.5}>
          <Box sx={{ mt: 1 }}>
            <Sidebar />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10.5} md={11} lg={11.2} xl={11.5}>
          <Box sx={{ width: "100%" }}>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"
              width="100%"
              sx={{ objectFit: "cover" }}
              style={{ aspectRatio: 13 / 2 }}
            />
            <Box
              sx={{
                display: "flex",
                mt: 3,
                paddingLeft: "3%",
                paddingRight: "3%",
              }}
              justifyConten="center"
              alignItems="center"
            >
              <Avatar
                sx={{
                  height: 60,
                  width: 60,
                  mr: 3,
                  [theme.breakpoints.down("sm")]: { display: "none" },
                }}
                src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"
              >
                {channel?.name.substring(0, 1)}
              </Avatar>
              <Box display="block" sx={{ ml: 0 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: darktitlecolor,
                    [theme.breakpoints.down("sm")]: { fontSize: 15 },
                  }}
                >
                  {channel?.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: darkchannelnamecolor,
                    [theme.breakpoints.down("sm")]: { fontSize: 8 },
                  }}
                >
                  {channel?.numberOfSubscribers} Subscribers
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  ml: "auto",
                  bgcolor: "red",
                  [theme.breakpoints.down("sm")]: {
                    size: "small",
                    height: 20,
                    width: 50,
                    fontSize: 8,
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box
              sx={{
                bgcolor: darkbgcolor,
                mt: 2,
                display: "flex",
                paddingRight: "5%",
                paddingLeft: "5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{ sx: { backgroundColor: darktitlecolor } }}
                sx={{ color: darktitlecolor }}
              >
                <Tab
                  disableRipple
                  label="Home"
                  style={{ minWidth: "25%", color: darktitlecolor }}
                />
                <Tab
                  disableRipple
                  label="Videos"
                  style={{ minWidth: "25%", color: darktitlecolor }}
                />
                <Tab
                  disableRipple
                  label="Playlists"
                  style={{ minWidth: "25%", color: darktitlecolor }}
                />
                <Tab
                  disableRipple
                  label="About"
                  style={{ minWidth: "25%", color: darktitlecolor }}
                />
              </Tabs>

              <Button onClick={()=>{
                  setEditChannelData(channel);
                 setOpenFormDialog(true) }} disableRipple variant="outlined" color="primary" sx={{ml: "auto",  height:30, [theme.breakpoints.down("sm")]: {height:20, fontSize:8 }}}>
                Edit
              </Button>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <TabPanel value={value} index={0}>
                {getAllPlaylistStatus === "success" && (
                  playlists.map(playlist =>
                  <Playlist playlist={playlist} />
                  ))}
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box sx={{ ml: 1, mb: 1 }}>
                  <Typography
                    variant="body1"
                    color="initial"
                    style={{ color: darktitlecolor, fontSize: 18 }}
                  >
                    Uploads
                  </Typography>
                </Box>
                <Grid container spacing={2} alignContent="center">
                  {channelVideosStatus === "success" &&
                    channelVideos.map((video) => (
                      <Grid
                        item
                        key={video._id}
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={2}
                      >
                        <VideoCard key={video._id} inChannel={true} videoData={video} />
                      </Grid>
                    ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box display="flex" alignItems="center" sx={{ ml: 1, mb: 1 }}>
                  <Typography
                    variant="body1"
                    color="initial"
                    style={{ color: darktitlecolor, fontSize: 18 }}
                  >
                    Created Playlists
                  </Typography>
                  <IconButton sx={{ml: 7, [theme.breakpoints.down("sm")]: {ml: "auto"}}} title="Create Playlist" aria-label="" onClick={()=> {}}>
                    <PlaylistCreateIcon sx={{color: darktitlecolor}}/>
                  </IconButton>
                </Box>
                <Grid container spacing={2} alignContent="center">
                  {getAllPlaylistStatus === "success" &&
                    playlists?.map((playlist) => (
                      <Grid
                        item
                        key={playlist._id}
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={2}
                      >
                        <PlaylistCard  key={playlist._id} playlist={playlist} />
                      </Grid>
                    ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <AboutChannel channel={channel}/>
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CreateEditChannel editChannelData={ editChannelData } openFormDialog = { openFormDialog } handleCloseFormDialog={handleCloseFormDialog}/>
    </Box>
  );
};

export default Channel;
