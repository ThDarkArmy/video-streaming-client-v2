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

const PlaylistCard = ({ videoData }) => {
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
          title={title}
          sx={{
            paddingBottom: 0,
            mb: 0,
            opacity: loading ? 0 : 1
          }}
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
        </Box>
       
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
