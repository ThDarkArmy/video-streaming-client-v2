import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Alert,
} from "@mui/material";
import { DarkTextField } from "../../controls/DarkTextField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  darkbgcolor,
  darkchannelnamecolor,
  darktitlecolor,
} from "../../colors/colors";
import { useTheme } from "@mui/material/styles";
import { signupThunk } from "./Authentication.slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signupResponse, signupError, signupStatus } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    if (signupStatus === "success") {
    }
    if (signupStatus === "failed") {
    }
  }, [signupStatus]);

  const handleChange = (e) => {
    const name = e.target.name;
    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: e.target.value });
  };

  const validate = () => {
    let temp = { ...errors };

    if (values["fullName"].length < 4) {
      temp.fullName = "Please enter a valid full name";
    }

    if (values["email"].length < 4) {
      temp.email = "Please enter a valid email";
    }

    if (values["password"].length < 8) {
      temp.password = "Please enter a valid password";
    }

    setErrors({ ...temp });
    if (temp.fullName || temp.email || temp.password) return false;
    return true;
  };

  const signup = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(signupThunk(values));
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        boxShadow: "none",
        bgcolor: darkbgcolor,
        paddingLeft: 2,
        paddingRight: 2,
        border: `1px solid ${darkchannelnamecolor}`,
        [theme.breakpoints.down("sm")]: {
          maxWidth: 380,
          border: `none`,
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="body2"
            color="initial"
            sx={{ color: darktitlecolor, fontSize: 25 }}
          >
            Register on Xzone
          </Typography>
        }
      />

      <CardContent>
        <form onSubmit={(e) => signup(e)}>
          {signupStatus === "success" && (
            <Alert variant="outlined" severity="success">
              {signupResponse.message}
            </Alert>
          )}
          {signupStatus === "failed" && (
            <Alert variant="outlined" severity="error">
              {signupError.message}
            </Alert>
          )}
          <DarkTextField
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            value={values.fullName}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            size="small"
            sx={{ mt: 2 }}
          />

          <DarkTextField
            id="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
            size="small"
            type="text"
            sx={{ mt: 1 }}
          />

          <DarkTextField
            id="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
            size="small"
            type="password"
            sx={{ mt: 1 }}
          />
          <Button
            type="submit"
            disableRipple
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              bgcolor: "#E50914",
              borderRadius: 0,
              "&:hover": { bgcolor: "red" },
            }}
          >
            Create Account
          </Button>
          <Box sx={{ mt: 2, paddingLeft: 1 }}>
            <Typography
              style={{
                marginTop: 3,
                fontSize: 12,
                fontFamily: "'Open Sans', sans-serif",
              }}
              variant="p"
              color="#C0C0C0"
            >
              By signing up, you agree to our terms, data and cookie policy. You
              may recieve email updates about our prodcuts and services.
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate("/login")}
            sx={{
              mt: 3,
              bgcolor: "inherit",
              borderRadius: 50,
              borderColor: darktitlecolor,
              border: 1,
              fontSize: "12px",
              color: darktitlecolor,
              "&:hover": {
                color: "#fff",
                borderColor: "#fff",
                fontSize: "12px",
                border: 1,
              },
            }}
          >
            Already have an account? Login
          </Button>
        </form>
        <Box display="flex" sx={{ mt: 1 }} alignItems="right">
          <Button
            disableRipple
            variant="standard"
            sx={{ ml: "auto", fontSize: "10px", color: "#C0C0C0" }}
          >
            Privacy
          </Button>
          <Button
            disableRipple
            variant="standard"
            sx={{ fontSize: "10px", color: "#C0C0C0" }}
          >
            Help
          </Button>
          <Button
            disableRipple
            variant="standard"
            sx={{ fontSize: "10px", color: "#C0C0C0" }}
          >
            Terms
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Signup;
