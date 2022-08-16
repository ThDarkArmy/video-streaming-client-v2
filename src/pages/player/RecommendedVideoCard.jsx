import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  darkbgcolor,
  darkchannelnamecolor,
  darktitlecolor,
} from "../../colors/colors";
import { useNavigate } from "react-router-dom";

const RecommendedVideoCard = ({ video }) => {
  const theme = useTheme();
  const navigate = useNavigate();
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
    <Card
      sx={{ display: "flex", mb: 2, bgcolor: darkbgcolor, paddingBottom: 0 }}
    >
      <Grid container>
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          
          <CardMedia
            onClick={()=> navigate(`/watch?video=${_id}`)}
            component="img"
            image={thumbnailStreamingPath}
            alt="Live from space album cover"
            sx={{cursor: "pointer"}}
          />
          
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
          <CardContent
            sx={{
              paddingTop: 1,
              paddingBottom: 0,
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Box display="flex" onClick={()=> navigate(`/watch?video=${_id}`)} sx={{cursor: "pointer"}}>
              <Typography
                component="body1"
                sx={{
                  fontSize: 12.5,
                  color: darktitlecolor,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </Typography>
            </Box>

            <Box sx={{ marginTop: 2 }}>
              <Typography
                sx={{
                  color: darkchannelnamecolor,
                  fontSize: 13,
                  cursor: "pointer",
                  mt: "auto",
                }}
                variant="body2"
              >
                {channel?.name}
              </Typography>
              <Box display="flex">
                <Typography
                  variant="body2"
                  sx={{ color: darkchannelnamecolor, mt: 0 }}
                >
                  {views} views {" ."}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: darkchannelnamecolor, ml: 1, mt: 0 }}
                >
                  {views} days ago
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RecommendedVideoCard;
