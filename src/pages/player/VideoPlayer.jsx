import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Divider,
  Avatar,
  Grid,
} from "@mui/material";
import { darkbgcolor, darktitlecolor } from "../../colors/colors";
import {
  MoreVert,
  ScreenShare,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";

const VideoPlayer = ({ video }) => {
  console.log("Video: ", video);
  const {
    category,
    channel,
    comments,
    createdAt,
    description,
    dislikes,
    duration,
    likes,
    mimeType,
    size,
    subcategories,
    tags,
    thumbnailPath,
    thumbnailStreamingPath,
    title,
    updatedAt,
    videoPath,
    videoStreamingPath,
    views,
    _id,
  } = video;
  return (
    <Box>
      <Card raised={true} sx={{ bgcolor: darkbgcolor, boxShadow: "none" }}>
        <CardMedia
          component="video"
          image={videoStreamingPath}
          src={videoStreamingPath}
          // autoPlay
          controls
        />
        <CardContent sx={{ paddingTop: 1, paddingRight: 0, paddingLeft: 0 }}>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: darktitlecolor,
              fontSize: 16,
              fontWeight: 600,
              ml: 1,
              mr: 1,
            }}
          >
            {title}
          </Typography>
          <Box
            display="flex"
            alignItems="space-between"
            sx={{ mt: 1, mr: 1, ml: 1 }}
          >
            <Grid container justifyContent="space-between">
              <Grid display="flex" item xs={12} sm={5.5} md={6} lg={7} xl={8}>
                <Typography
                  variant="body2"
                  sx={{ color: darktitlecolor, mt: 1 }}
                >
                  {views} views {" ."}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: darktitlecolor, ml: 1, mt: 1 }}
                >
                  {views} days ago
                </Typography>
              </Grid>
            <Grid display="flex" item xs={12} sm={6.5} md={6} lg={5} xl={4}>
               
                <Button
                  sx={{ ml: 0, color: darktitlecolor }}
                  disableRipple
                  variant="standard"
                  startIcon={<ThumbUpOffAlt />}
                >
                  {likes}
                </Button>
                <Button
                  sx={{ color: darktitlecolor, ml: "auto" }}
                  disableRipple
                  variant="standard"
                  startIcon={<ThumbDownOffAlt />}
                >
                  {dislikes}
                </Button>
                <Button
                  sx={{ color: darktitlecolor, ml: "auto" }}
                  disableRipple
                  variant="standard"
                  startIcon={<ScreenShare />}
                >
                  Share
                </Button>
                <IconButton disableRipple sx={{ color: darktitlecolor, ml: "auto" }}>
                  <MoreVert />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ bgcolor: "#464949", borderBottomWidth: 0.1, mt: 1 }} />
          <Box sx={{ display: "flex", mt: 1.5, ml: 1, mr: 1 }}>
            <Avatar variant="rounded" sx={{ bgcolor: "#103C8B" }}>
              {channel?.name.substring(0, 1)}
            </Avatar>
            <Box display="block" sx={{ ml: 1 }}>
              <Typography variant="body2" sx={{ color: darktitlecolor }}>
                {channel.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: darktitlecolor, fontSize: 11 }}
              >
                {channel.numberOfSubscribers} Subscribers{" "}
              </Typography>
            </Box>
            <Button
                size="small"
              variant="contained"
              sx={{ bgcolor: "red", color: "#fff", ml: "auto" }}
            >
              Subscribe
            </Button>
          </Box>
          <Box sx={{ mt: 2, ml: 7, mr: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: 12, color: darktitlecolor }}
            >
              {description}
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: "#464949", borderBottomWidth: 0.1, mt: 2 }} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoPlayer;
