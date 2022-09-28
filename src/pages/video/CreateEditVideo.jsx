import { useState, forwardRef, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Slide,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  useMediaQuery,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import {
  darkbgcolor,
  darkchannelnamecolor,
  darktfbgcolor,
  darktitlecolor,
} from "../../colors/colors";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideoThunk } from "./Video.slice";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DarkTextField = styled(TextField)({
  input: {
    color: darktitlecolor,
  },
  background: darkbgcolor,

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${darkchannelnamecolor}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${darktitlecolor}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${darktitlecolor}`,
    },
  },
});

export const DarkMenuItem = styled(MenuItem)({
  color: darktitlecolor,
  background: darkbgcolor,

  "&: hover": {
    bgcolor: darktfbgcolor,
  },
  "&: focus": {
    bgcolor: darktfbgcolor,
  },

  "& .Mui-selected": {
    color: "red",
    background: darkbgcolor,
  },

  "& .Mui-focusVisible": {
    color: "red",
  },
});

const CreateEditVideo = ({
  editVideoData,
  openVideoFormDialog,
  handleCloseVideoFormDialog,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { uploadVideoStatus, editVideoStatus } = useSelector(
    (state) => state.video
  );

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
    videoFile: "",
  });

  useEffect(() => {
    if (editVideoData) {
      const { title, tags, category, description } = editVideoData;
      setTitle(title);
      setDescription(description);
      setTags(tags);
      setCategory(category);
    }
  }, [editVideoData]);

  useEffect(() => {
    console.log("UploadVideoStatus", uploadVideoStatus)
    if (uploadVideoStatus === "success") {
      handleCloseVideoFormDialog();
      alert("video successfully uploaded successfully");
    }
  }, [uploadVideoStatus]);

  const updateVideo = () => {
    // dispatch(updateChannelThunk(channelData));
    handleCloseVideoFormDialog();
  };

  const validate = () => {
    let temp = { ...errors };

    if (title==="" || title.length < 4) {
      temp.title = "Title must be atleast 5 characters long";
    }

    if (description==="" || description.length < 20) {
      temp.description = "Description must be atleast 20 characters long";
    }

    if (category === "") {
      temp.category = "Please choose a category";
    }

    if (videoFile === null) {
      temp.videoFile = "Please choose a video ";
    }

    setErrors({ ...temp });
    if (temp.title || temp.description || temp.category || temp.videoFile)
      return false;
    return true;
  };

  const createVideo = () => {
    if (validate()) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("tags", tags.split(" "));
      formData.append("category", category);
      formData.append("video", videoFile);
      dispatch(uploadVideoThunk(formData));
    } else {
      const videoData = {
        title,
        description,
        tags,
        category,
        videoFile,
      };
      alert(
        "Invalid uploadVideo" +
          JSON.stringify(errors) +
          JSON.stringify(videoData)
      );
    }

    const videoData = {
      title,
      description,
      tags,
      category,
      videoFile,
    };

    console.log("videoData: " + videoData);

    // dispatch(createChannelThunk(channelData));
    // handleCloseVideoFormDialog();
  };

  const categories = {
    ENTERTAINMENT: "Entertainment",
    MUSIC: "Music",
    SPORTS: "Sports",
    GAMIMG: "Gaming",
    MOVIES: "Movies",
    NEWS: "News",
    LIVE: "Live",
    FASHION_AND_BEAUTY: "Fashion and Beauty",
    LEARNING: "Learning",
    SPOTLIGHT: "Spotlight",
    "360_VIDEO": "360 Video",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Dialog
        fullScreen={mobile ? true : false}
        open={openVideoFormDialog}
        onClose={handleCloseVideoFormDialog}
        TransitionComponent={Transition}
        sx={{ color: darkbgcolor }}
      >
        {mobile ? (
          <AppBar sx={{ position: "relative", bgcolor: darkbgcolor }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseVideoFormDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {editVideoData ? "Update Video" : "Upload Video"}
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleCloseVideoFormDialog}
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
        ) : (
          <DialogTitle sx={{ bgcolor: darkbgcolor, color: darktitlecolor }}>
            {editVideoData ? "Update Video" : "Upload Video"}
          </DialogTitle>
        )}

        <DialogContent sx={{ bgcolor: darkbgcolor }} component="div">
          <DarkTextField
            id="video"
            name="video"
            placeholder="Choose File"
            fullWidth
            size="small"
            type="file"
            accept="video/*"
            onChange={(e) => {
              setVideoFile(e.target.files[0]);
              setErrors({ ...errors, videoFile: "" });
            }}
          />
          <DarkTextField
            id="title"
            name="title"
            placeholder="Enter Title"
            fullWidth
            size="small"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors({ ...errors, title: "" });
            }}
            sx={{ mt: 1 }}
          />
          <FormControl
            fullWidth
            variant="filled"
            sx={{ mt: 1, minWidth: 120, paddingTop: 0 }}
            size="small"
          >
            <InputLabel id="demo-simple-select-filled-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setErrors({ ...errors, category: "" });
              }}
              inputProps={{ sx: { color: darktitlecolor } }}
              MenuProps={{ sx: { color: darkbgcolor, paddingTop: -5, mt: -2 } }}
              SelectDisplayProps={{ sx: { color: "red" } }}
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              {Object.keys(categories).map((catKey) => (
                <MenuItem
                  sx={{
                    bgcolor: darkbgcolor,
                    color: darktitlecolor,
                    "&:hover": { bgcolor: darktfbgcolor },
                    "&:focus": { bgcolor: darktfbgcolor },
                  }}
                  value={catKey}
                >
                  {categories[catKey]}
                </MenuItem>
                // <DarkMenuItem value={catKey}>
                //   {categories[catKey]}
                // </DarkMenuItem>
              ))}
            </Select>
          </FormControl>
          <DarkTextField
            margin="dense"
            id="tags"
            placeholder="Enter Tags"
            type="text"
            fullWidth
            size="small"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <DarkTextField
            margin="dense"
            id="description"
            placeholder="Enter Description"
            type="text"
            fullWidth
            multiline={true}
            minRows={5}
            size="small"
            value={description}
            onChange={(e) => {setDescription(e.target.value); setErrors({...errors, description: ""})}}
            InputProps={{ style: { color: darktitlecolor } }}
          />
        </DialogContent>
        <DialogActions sx={{ bgcolor: darkbgcolor }}>
          <Button
            onClick={() => {
              handleCloseVideoFormDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => (editVideoData ? updateVideo() : createVideo())}
          >
            {editVideoData ? "Update Video" : "Upload Video"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateEditVideo;
