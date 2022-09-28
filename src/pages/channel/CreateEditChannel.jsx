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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import {
  darkbgcolor,
  darkchannelnamecolor,
  darktitlecolor,
} from "../../colors/colors";
import { styled } from "@mui/material/styles";
import { createChannelThunk, updateChannelThunk } from "./Channel.slice";
import { useDispatch, useSelector } from "react-redux";

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
      border: `2px solid ${darktitlecolor}`,
    },
  },
});

const CreateEditChannel = ({
  editChannelData,
  openFormDialog,
  handleCloseFormDialog: handleCloseChannelFormDialog,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { createChannelStatus } = useSelector((state) => state.channel);

  const [links, setLinks] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  useEffect(() => {
    if (editChannelData) {
      const { name, email, location, description } = editChannelData;
      setName(name);
      setEmail(email);
      setDescription(description);
      setLocation(location);
    }
  }, [editChannelData]);

  useEffect(() => {
    if (createChannelStatus === "success") {
      alert("Channel created successfully");
      handleCloseChannelFormDialog();
    }
  }, [createChannelStatus]);

  const handleAddMoreLink = () => {
    if (linkTitle.length > 0 && linkUrl.length > 0) {
      setLinks([...links, { title: linkTitle, url: linkUrl }]);
    }
    setLinkTitle("");
    setLinkUrl("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  const updateChannel = () => {
    const channelData = {
      name,
      email,
      location,
      description,
      links,
    };

    dispatch(updateChannelThunk(channelData));
    handleCloseChannelFormDialog();
  };

  const createChannel = () => {
    const channelData = {
      name,
      email,
      location,
      description,
      links
    };

    dispatch(createChannelThunk(channelData));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Dialog
        fullScreen={mobile ? true : false}
        open={openFormDialog}
        onClose={handleCloseChannelFormDialog}
        TransitionComponent={Transition}
        sx={{ color: darkbgcolor }}
      >
        {mobile ? (
          <AppBar sx={{ position: "relative", bgcolor: darkbgcolor }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseChannelFormDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {editChannelData ? "Update Channel" : "Create Channel"}
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleCloseChannelFormDialog}
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
        ) : (
          <DialogTitle sx={{ bgcolor: darkbgcolor, color: darktitlecolor }}>
            {editChannelData ? "Update Channel" : "Create Channel"}
          </DialogTitle>
        )}

        <DialogContent sx={{ bgcolor: darkbgcolor }} component="div">
          <DarkTextField
            id="name"
            name="name"
            placeholder="Enter Name"
            fullWidth
            size="small"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DarkTextField
            margin="dense"
            id="email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DarkTextField
            margin="dense"
            id="location"
            placeholder="Enter Location"
            type="text"
            fullWidth
            size="small"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{ style: { color: darktitlecolor } }}
          />
          {!editChannelData && (
            <>
              {links.map((link) => (
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Typography variant="body2" color="initial">
                    {link.title}
                  </Typography>
                  <Typography variant="body2" color="initial">
                    {link.url}
                  </Typography>
                </Box>
              ))}
              <Typography
                variant="body2"
                component="div"
                style={{ color: darktitlecolor, mt: 1 }}
              >
                Add Links
              </Typography>

              <DarkTextField
                margin="dense"
                id="title"
                placeholder="Enter title"
                type="text"
                fullWidth
                size="small"
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
              />
              <DarkTextField
                margin="dense"
                id="url"
                placeholder="Enter url"
                type="url"
                fullWidth
                size="small"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
              <Button
                type="submit"
                onClick={() => handleAddMoreLink()}
                variant="text"
                color="primary"
                sx={{ ml: "auto", fontSize: 11, float: "right" }}
              >
                Add Link
              </Button>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ bgcolor: darkbgcolor }}>
          <Button
            onClick={() => {
              handleCloseChannelFormDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              editChannelData ? updateChannel() : createChannel()
            }
          >
            {editChannelData ? "Update Channel" : "Create Channel"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateEditChannel;
