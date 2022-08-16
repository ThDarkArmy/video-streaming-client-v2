import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { darkchannelnamecolor, darktitlecolor } from "../../colors/colors";
import {
  MoreVert,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Comments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expand, setExpand] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  // useEffect(()=> {
  //   window.addEventListener("resize", ()=> setIsMobile(mobile));
  // }, [mobile])
     window.addEventListener("resize", ()=> setIsMobile(mobile));

  const comments = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const RenderComment = () => (
    <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
      <Box
        display="flex"
        sx={{ paddingRight: 3, paddingLeft: 1 }}
        onClick={() => setExpand(!expand)}
      >
        <Typography sx={{ color: darktitlecolor, fontSize: 15, mt: 1 }}>
          {242} comments
        </Typography>

        <IconButton sx={{ ml: "auto" }} onClick={() => setExpand(!expand)}>
          <ExpandLess sx={{ color: darktitlecolor }} />
        </IconButton>
      </Box>

      <Box>
        <Box display="flex" sx={{ mt: 3, paddingBottom: 3 }}>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "#103C8B", height: 32, width: 32 }}
          ></Avatar>
          <TextField fullWidth variant="standard" sx={{ ml: 1, mt: 0.5 }} />
          <Button
            disableRipple
            size="small"
            variant="standard"
            sx={{ ml: 1, color: darktitlecolor }}
          >
            Comment
          </Button>
        </Box>
        <Box display="block">
          {comments.map((comment) => (
            <Box display="flex" sx={{ mt: 2 }}>
              <Avatar
                variant="rounded"
                sx={{ bgcolor: "#103C8B", height: 32, width: 32 }}
              ></Avatar>
              <Box display="block" sx={{ ml: 2 }}>
                <Box display="flex">
                  <Typography variant="p" sx={{ color: darktitlecolor }}>
                    Dark Army
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 11,
                      ml: 2,
                      color: darkchannelnamecolor,
                      mt: 0.5,
                    }}
                  >
                    3 days ago
                  </Typography>
                  <IconButton disableRipple aria-label="" sx={{ ml: "auto" }}>
                    <MoreVert
                      sx={{ color: darkchannelnamecolor, fontSize: 18 }}
                    />
                  </IconButton>
                </Box>
                <Box display="flex" sx={{ paddingRight: 10 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 13, color: darktitlecolor }}
                  >
                    We can't explain about this song❣️🎵in our words.. This is a
                    such amazing song. The voice of arijit singh is God gifted.
                    ...
                  </Typography>
                </Box>
                <Box display="flex">
                  <IconButton>
                    <ThumbUpOffAlt sx={{ color: darkchannelnamecolor }} />
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{ ml: 1, color: darkchannelnamecolor }}
                    >
                      {437}
                    </Typography>
                  </IconButton>
                  <IconButton sx={{ ml: 2 }}>
                    <ThumbDownOffAlt sx={{ color: darkchannelnamecolor }} />
                    <Typography
                      variant="body2"
                      color="initial"
                      sx={{ ml: 1, color: darkchannelnamecolor }}
                    >
                      {346}
                    </Typography>
                  </IconButton>
                  <Button
                    variant="standard"
                    sx={{ ml: 2, color: darkchannelnamecolor }}
                  >
                    Reply
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return mobile ? (
    expand ? (
      <RenderComment />
    ) : (
      <Box display="flex" sx={{ paddingRight: 4, paddingLeft: 2 }}>
        <Typography sx={{ color: darktitlecolor, fontSize: 15, mt: 1 }}>
          {242} comments
        </Typography>
        <IconButton sx={{ ml: "auto" }} onClick={() => setExpand(!expand)}>
          <ExpandMore sx={{ color: darktitlecolor }} />
        </IconButton>
      </Box>
    )
  ) : (
    <RenderComment />
  );
};

export default Comments;
