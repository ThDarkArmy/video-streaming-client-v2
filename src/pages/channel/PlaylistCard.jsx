import { useState, useRef } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Skeleton
} from "@mui/material";
import {
  darkbgcolor,
  darktitlecolor,
} from "../../colors/colors";


const PlaylistCard = ({ playlist }) => {
  const [loading, setLoading] = useState(true);

  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setLoading(false);
    }
  }

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
      <a style={{ textDecoration: "none" }} href={"/watch?video="}>
        <CardMedia
          component="img"
          image={playlist?.videos[0].thumbnailStreamingPath}
          title={playlist?.name}
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
          <a style={{ textDecoration: "none" }} href={"/watch?video="}>
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
              {playlist?.name}
            </Typography>
          </a>
        </Box>
       
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
