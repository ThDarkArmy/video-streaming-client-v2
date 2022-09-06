import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { darktitlecolor } from "../../colors/colors";
import VideoCard from "../home/VideoCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useTheme} from "@mui/material/styles";

const Playlist = ({ videos }) => {
  const theme = useTheme()

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
          Dark Playlist{" "}
        </Typography>
        <Button
          disableRipple
          sx={{ ml: 3, color: darktitlecolor }}
          startIcon={<PlayArrowIcon />}
        >
          Play All
        </Button>
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
            <VideoCard key={video._id} inChannel={true} videoData={video} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Playlist;
