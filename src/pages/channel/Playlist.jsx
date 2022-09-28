import { Box, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import { darktitlecolor } from "../../colors/colors";
import VideoCard from "../home/VideoCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useTheme} from "@mui/material/styles";
import AddVideoIcon from '@mui/icons-material/VideoCall';

const Playlist = ({playlist}) => {
  const theme = useTheme()

  const { videos, name } = playlist;

  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Box
        display="flex"
        sx={{
          ml: 1,
          mb: 1,
          alignContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          style={{ color: darktitlecolor, fontWeight: 500 }}
        >
         {name}
        </Typography>
        <Button
          disableRipple
          sx={{ ml: 3, color: darktitlecolor }}
          startIcon={<PlayArrowIcon />}
        >
          Play All
        </Button>
        <IconButton sx={{ml: 2}} aria-label="Add Video" title="Add Video to playlist" onClick={()=> {}}>
          <AddVideoIcon sx={{color: darktitlecolor}}/>
        </IconButton>
      </Box>
      <Box
        display="flex"
        sx={{
          maxWidth: "100%",
          overflowY: "hidden",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            backgroundColor: '#202324',
            height: "1em",
            [theme.breakpoints.down("sm")]:{height: "0.3em"}
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#454A4D'
          }
        }}
      >
        {videos.map((video) => (
          <Box key={video._id} sx={{ mr: 2 }}>
            <VideoCard key={video._id} inChannel={true} inPlaylist={true} videoData={video} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Playlist;
