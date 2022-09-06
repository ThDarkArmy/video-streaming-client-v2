import {useState, forwardRef} from "react";
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
  let link ={
    title: "",
    url: ""
  }

  const [links, setLinks] = useState([link]);

  const handleAddMoreLink = ()=>{
    setLinks([...links, link]);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
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
          <form onSubmit={(event)=>handleOnSubmit(event)}>
          <DarkTextField
            id="name"
            name="name"
            placeholder="Enter Name"
            fullWidth
            size="small"
            type="text"
          />
          <DarkTextField
            margin="dense"
            id="email"
            placeholder="Enter Email"
            type="email"
            fullWidth
            size="small"
          />
          <DarkTextField
            margin="dense"
            id="location"
            placeholder="Enter Location"
            type="text"
            fullWidth
            size="small"
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
            InputProps={{ style: { color: darktitlecolor } }}
          />
          <Typography variant="body2" component="div" style={{color: darktitlecolor, mt: 1}}>Add Links</Typography>

          {links.map(link =><>
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

          <Button type="submit" onClick={()=>handleAddMoreLink()} variant="text" color="primary" sx={{ml: "auto", fontSize:11, float:"right"}}>
            Add More
          </Button>
          </> )}
          </form>
        </DialogContent>
        <DialogActions sx={{ bgcolor: darkbgcolor }}>
          <Button onClick={()=> {
            setLinks([link]);
            handleCloseFormDialog()}}>Cancel</Button>
          <Button type="submit" onClick={()=> {
             setLinks([link]);
            handleCloseFormDialog()}}>
            {editChannelData ? "Update Channel" : "Create Channel"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateEditChannel;
