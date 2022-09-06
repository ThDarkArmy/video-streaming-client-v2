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
import {timeSince, formatNumberCompact} from "../../utils/utils";

const VideoPlayer = ({ video }) => {
  console.log("Video: ", video);
 
  return (
    <Box>
      <Card raised={true} sx={{ bgcolor: darkbgcolor, boxShadow: "none" }}>
        <CardMedia
          component="video"
          image={video?.videoStreamingPath}
          src={video?.videoStreamingPath}
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
            {video?.title}
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
                  {video && formatNumberCompact(video?.views)} views {" ."}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: darktitlecolor, ml: 1, mt: 1 }}
                >
                  {video && timeSince(video?.createdAt)}
                </Typography>
              </Grid>
            <Grid display="flex" item xs={12} sm={6.5} md={6} lg={5} xl={4}>
               
                <Button
                  sx={{ ml: 0, color: darktitlecolor }}
                  disableRipple
                  variant="standard"
                  startIcon={<ThumbUpOffAlt />}
                >
                  {video && formatNumberCompact(video?.likes)}
                </Button>
                <Button
                  sx={{ color: darktitlecolor, ml: "auto" }}
                  disableRipple
                  variant="standard"
                  startIcon={<ThumbDownOffAlt />}
                >
                  {video && formatNumberCompact(video?.dislikes)}
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
              {video?.channel?.name.substring(0, 1)}
            </Avatar>
            <Box display="block" sx={{ ml: 1 }}>
              <Typography variant="body2" sx={{ color: darktitlecolor }}>
                {video?.channel.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: darktitlecolor, fontSize: 11 }}
              >
                {video && formatNumberCompact(video.channel.numberOfSubscribers)} Subscribers{" "}
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
              {video?.description}
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: "#464949", borderBottomWidth: 0.1, mt: 2 }} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoPlayer;
