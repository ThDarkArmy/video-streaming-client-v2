import React from "react";
import { InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1.5px solid #403C48",
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    backgroundColor: "#403C48",
  },
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    // display: "none"
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "33vw",
    height: 18,
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
}));

const SearchComponent = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <div>
      {isMobile ? (
        <SearchIcon sx={{ ml: "auto", fontSize: "20px", mt: 1 }} />
      ) : (
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{fontSize: "15px"}}/>
          </SearchIconWrapper>
          <StyledInputBase
            fullWidth
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      )}
    </div>
  );
};

export default SearchComponent;
