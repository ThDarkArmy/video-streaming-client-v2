import React from "react";
import { Box, Stack } from "@mui/material";
import Signup from "./Signup";
import { darkbgcolor } from "../../colors/colors";

const Authentication = () => {
  return (
    <Box
      component={Stack}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: 2,
        position: "absolute",
        top: 0,
        bottom: 0,
        left:0,
        right:0,
        bgcolor: darkbgcolor,
      }}
    >
      <Signup />
    </Box>
  );
};

export default Authentication;
