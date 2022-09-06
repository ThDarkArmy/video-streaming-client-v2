import { useState, useRef } from "react";
import {
  Card,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import {
  darkbgcolor,
  darktitlecolor,
  darkchannelnamecolor,
} from "../../colors/colors";

const VideoCard = ({ videoData, inChannel }) => {
  const [loading, setLoading] = useState(true);

  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setLoading(false);
    }
  }
  let {
    _id,
    channel,
    description,
    title,
    views,
    thumbnailStreamingPath,
    videoStreamingPath,
  } = videoData;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{minWidth: 230, maxWidth: 550, paddingRight: 0.4, bgcolor: darkbgcolor, transition: 'transform 200ms', '&:hover':{transform: 'scale(1.03)'} }}>
      <a style={{ textDecoration: "none" }} href={"/watch?video=" + _id}>
        <CardMedia
          component="img"
          image={thumbnailStreamingPath}
          // src={videoStreamingPath}
          title={title}
          sx={{
            paddingBottom: 0,
            mb: 0,
            opacity: loading ? 0 : 1
          }}
          autoPlay
          onLoad={() => imageLoaded()}
        />
        {loading && (
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        )}
      </a>
      <CardContent sx={{ paddingTop: 1.5, paddingLeft: 0.3, paddingRight: 0 }}>
        <Box display="flex">
          <a style={{ textDecoration: "none" }} href={"/watch?video=" + _id}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 525,
                fontSize: 13,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontFamily: `"bello-pro-1", "bello-pro-2", sans-serif`,
              }}
              style={{ color: darktitlecolor }}
            >
              {title}
            </Typography>
          </a>
          <IconButton
            onClick={handleClick}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{ height: 8, width: 5, ml: "auto" }}
          >
            <MoreVertIcon sx={{ color: "#C0C0C0" }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Watch later</MenuItem>
            <MenuItem onClick={handleClose}>Add to queue</MenuItem>
          </Menu>
        </Box>
        <Box display="flex" sx={{ mt: 2 }}>
          {!inChannel && <a
            style={{ textDecoration: "none" }}
            href={"/channels?channel=" + channel?._id}
          >
            <Avatar
              src={thumbnailStreamingPath}
              variant="rounded"
              sx={{ height: 33, width: 33, mt: 0.5, bgcolor: "#6495ED", mr:2 }}
            >
              {channel?.name.substring(0, 1)}
            </Avatar>
          </a>}
          <Box component="div" sx={{  }}>
            {!inChannel && <Box>
              <a
                style={{ textDecoration: "none" }}
                href={"/channels?channel=" + channel?._id}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{
                    fontWeight: 700,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    "&:hover": {
                      color: "#fff",
                      fontWeight: 800,
                    },
                  }}
                  style={{
                    color: darkchannelnamecolor,
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {channel?.name}
                </Typography>
              </a>
            </Box>}

            <Box display="flex" sx={{ width: "100%" }}>
              <Typography
                variant="body2"
                component="p"
                style={{ color: darkchannelnamecolor }}
              >
                10 days ago &nbsp; . &nbsp;
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ color: darkchannelnamecolor }}
              >
                {views} Views
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
