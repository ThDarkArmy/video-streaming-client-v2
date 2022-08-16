import React, { useEffect } from 'react'
import { Box, Grid, useMediaQuery } from '@mui/material'
import { darkbgcolor } from '../../colors/colors'
import VideoPlayer from './VideoPlayer'
import RecommendedVideos from './RecommendedVideos';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommentsByVideoThunk, getAllRecommendedVideoThunk, getVideoByIdThunk } from './Player.slice';
import { useTheme } from "@mui/material/styles";
import Comments from './Comments';



const Player = () => {
    const dispatch = useDispatch();
    const queryParam = useLocation().search;

    const videoId = new URLSearchParams(queryParam).get("video");

    const player = useSelector(state=> state.player);

    const theme = useTheme();

    useEffect(()=> {
        dispatch(getVideoByIdThunk(videoId));
        dispatch(getAllCommentsByVideoThunk(videoId));
        dispatch(getAllRecommendedVideoThunk(videoId));
    }, [])

    useEffect(()=> {

    },[])

  return (
   <Box sx={{paddingTop: 8, bgcolor: darkbgcolor, [theme.breakpoints.up("md")]: {paddingRight: 5, paddingLeft: 5}}}>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                {player.videoStatus==="success" && <VideoPlayer video={player.video}/>}
                <Comments/>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <RecommendedVideos/>
            </Grid>

        </Grid>
   </Box>
  )
}

export default Player