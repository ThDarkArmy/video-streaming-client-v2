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
import { updateChannelThunk } from "./Channel.slice";
import { useDispatch, useSelector} from "react-redux";

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
  handleCloseFormDialog,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  let link = {
    title: "",
    url: "",
  };

  const [links, setLinks] = useState([link]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editChannelData) {
      const { name, email, location, description } = editChannelData;
      setName(name);
      setEmail(email);
      setDescription(description);
      setLocation(location);
    }
  }, [editChannelData]);

  const handleAddMoreLink = () => {
    setLinks([...links, link]);
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
    };

    dispatch(updateChannelThunk(channelData));
    handleCloseFormDialog();
  };

  const createChannel = () => {
    
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Dialog
        fullScreen={mobile ? true : false}
        open={openFormDialog}
        onClose={handleCloseFormDialog}
        TransitionComponent={Transition}
        sx={{ color: darkbgcolor }}
      >
        {mobile ? (
          <AppBar sx={{ position: "relative", bgcolor: darkbgcolor }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseFormDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {editChannelData ? "Update Channel" : "Create Channel"}
              </Typography>
              <Button autoFocus color="inherit" onClick={handleCloseFormDialog}>
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
              />
              <DarkTextField
                margin="dense"
                id="url"
                placeholder="Enter url"
                type="url"
                fullWidth
                size="small"
              />

              <Button
                type="submit"
                onClick={() => handleAddMoreLink()}
                variant="text"
                color="primary"
                sx={{ ml: "auto", fontSize: 11, float: "right" }}
              >
                Add More
              </Button>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ bgcolor: darkbgcolor }}>
          <Button
            onClick={() => {
              setLinks([link]);
              handleCloseFormDialog();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => editChannelData? updateChannel() : createChannel()}
          >
            {editChannelData ? "Update Channel" : "Create Channel"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateEditChannel;
