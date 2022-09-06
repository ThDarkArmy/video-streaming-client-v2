import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Alert,
  FormControlLabel,
  Checkbox,
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
import { loginThunk } from "./Authentication.slice";

const Login = ({ setHaveAccount, setForgotPassword }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { loginResponse, loginError, loginStatus } = useSelector(
    (state) => state.authentication
  );

  // useEffect(()=> {
  //   if(localStorage.getItem("JWT_TOKEN")){
  //     navigate("/")
  //   }
  // },[])

  useEffect(() => {
    if (loginStatus === "success") {
      localStorage.setItem("JWT_TOKEN", loginResponse.body.token);
      localStorage.setItem("FULL_NAME", loginResponse.body.user.fullName);
      localStorage.setItem("EMAIL", loginResponse.body.user.email);
      if (loginResponse.body.user.channel)
        localStorage.setItem("CHANNEL", loginResponse.body.user.channel);
      navigate("/");
    }
    if (loginStatus === "failed") {
    }
  }, [loginStatus]);

  const handleChange = (e) => {
    const name = e.target.name;
    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: e.target.value });
  };

  const validate = () => {
    let temp = { ...errors };

    if (values["email"].length < 4) {
      temp.email = "Please enter a valid email";
    }

    if (values["password"].length < 8) {
      temp.password = "Please enter a valid password";
    }

    setErrors({ ...temp });
    if (temp.email || temp.password) return false;
    return true;
  };

  const login = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(loginThunk(values));
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
            Login to Xzone
          </Typography>
        }
      />

      <CardContent>
        <form onSubmit={(e) => login(e)}>
          {loginStatus === "failed" && (
            <Alert variant="outlined" severity="error">
              {loginError.message}
            </Alert>
          )}
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
            type={showPassword ? "text" : "password"}
            sx={{ mt: 1 }}
          />
          <Box display="flex">
            <FormControlLabel
              label={
                <Typography sx={{ fontSize: "10px", color: darktitlecolor }}>
                  Show Password
                </Typography>
              }
              control={
                <Checkbox
                  disableRipple
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  size="small"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 15,
                      color: darktitlecolor,
                    },
                  }}
                />
              }
            />
            <Typography
              onClick={() => setForgotPassword(true)}
              sx={{
                fontSize: "10px",
                ml: "auto",
                cursor: "pointer",
                mt: 1,
                color: darktitlecolor,
              }}
            >
              Forgot Password
            </Typography>
          </Box>
          <Button
            type="submit"
            disableRipple
            fullWidth
            variant="contained"
            sx={{
              mt: 0,
              bgcolor: "#E50914",
              borderRadius: 0,
              "&:hover": { bgcolor: "red" },
            }}
          >
            Login
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
            onClick={() => setHaveAccount(false)}
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
            Don't have an account? Signup
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

export default Login;
