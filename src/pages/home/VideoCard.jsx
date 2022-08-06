import React from "react";
import {
  Card,
  Link,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

const VideoCard = ({ videoData }) => {
  let { _id, channel, description, title, views, thumbnailStreamingPath } =
    videoData;

  console.log(videoData);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      color="primary"
      sx={{ maxWidth: 550, paddingRight: 0.4, bgcolor: "#181A1B" }}
    >
      <a style={{ textDecoration: "none" }} href={"/watch?video=" + _id}>
        <CardMedia
          component="img"
          image={thumbnailStreamingPath}
          title={title}
          sx={{
            paddingBottom: 0,
            mb: 0,
            "&:hover": { border: "2px solid red" },
          }}
        />
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
                "&:hover": { fontSize: 13.1 },
              }}
              style={{ color: "#C0C0C0" }}
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
            <MoreVertIcon />
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
          <a
            style={{ textDecoration: "none" }}
            href={"/channels?channel=" + channel?._id}
          >
            <Avatar
              variant="rounded"
              sx={{ height: 33, width: 33, mt: 0.5, bgcolor: "green" }}
            >
              {channel?.name.substring(0, 1)}
            </Avatar>
          </a>
          <Box component="div" sx={{ ml: 2 }}>
            <Box>
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
                    color: "#808080",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {channel?.name}
                </Typography>
              </a>
            </Box>

            <Box display="flex" sx={{ width: "100%" }}>
              <Typography
                variant="body2"
                component="p"
                style={{ color: "#808080" }}
              >
                10 days ago &nbsp; . &nbsp;
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ color: "#808080" }}
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
