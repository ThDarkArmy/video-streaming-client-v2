import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Signup from "./Signup";
import { darkbgcolor } from "../../colors/colors";
import Login from "./Login";
import ResetPassword from "./ResetPassword";

const Authentication = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

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
        left: 0,
        right: 0,
        bgcolor: darkbgcolor,
      }}
    >
      {forgotPassword ? (
        <ResetPassword setForgotPassword={setForgotPassword} />
      ) : haveAccount ? (
        <Login
          setHaveAccount={setHaveAccount}
          setForgotPassword={setForgotPassword}
        />
      ) : (
        <Signup setHaveAccount={setHaveAccount} />
      )}
    </Box>
  );
};

export default Authentication;
