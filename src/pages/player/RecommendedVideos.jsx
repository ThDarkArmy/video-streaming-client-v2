import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import RecommendedVideoCard from "./RecommendedVideoCard";

const RecommendedVideos = () => {
  const recommendedVideos = useSelector(
    (state) => state.player.recommendedVideos
  );
  return (
    <Box display="block" >
      {recommendedVideos.map((video) => (
        <RecommendedVideoCard video={video} />
      ))}
    </Box>
  );
};

export default RecommendedVideos;
