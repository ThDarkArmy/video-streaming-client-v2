import React from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { darktfbgcolor } from "../colors/colors";

export const DarkTextField = styled(TextField)({
  input: {
    color: "#fff",
  },
  background: darktfbgcolor,

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // backgroundColor: "#454545",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
});

export default function field() {
  return <DarkTextField placeholder="Dark Text Field" />;
}
