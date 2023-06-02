import { Typography, createTheme, ThemeProvider,Link } from "@mui/material";
import { Box, Button, TextField } from "@mui/material";
import appLogo from "../assets/AppLogo.png";
import "../styles/Registration.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#4A7AFB",
          fontWeight: "bold",
          color: "white",
          "&:hover": {
            background: "linear-gradient(to bottom right,#4A7AFB,#8c1755)",
          },
        },
      },
    },
  },
});

function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPass = (event) => {
    setConfirmPassword(event.target.value);
  };

  let PasswordMatched = true;
  if (password !== confirmPassword) {
    PasswordMatched = false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      password: data.get('password')
    }
    fetch("http://localhost:3000/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status === 'ok'){
          localStorage.setItem('token',data.token);
          window.location = "/Cards"
          alert('Register success')
        }
        else{
          alert('Register failed')
        }
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
  };
 
  return (
    <Box sx={{ display: "flex", margin: 0, padding: 0 }}>
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          background: {
            xs: "none",
            lg: "linear-gradient(to bottom, #FEF5C3, #FB735B)",
            xl: "linear-gradient(to bottom, #FEF5C3, #FB735B)",
          },
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "raleway",
            fontWeight: "bold",
            color: "#4A7AFB",
            fontSize: { xs: "40px", md: "70px" },
            textAlign: "center",
            margin: { lg: 3 },
            ml: { xs: 2, sm: 11, md: 11 },
            width: "80%",
          }}
        >
          JUSTPLAN
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "raleway",
            color: "black",
            fontSize: { xs: "20px", md: "40px" },
            textAlign: "center",
            margin: 3,
            ml: { xs: 2, sm: 11, md: 11 },
            width: "80%",
          }}
        >
          Hi Stranger???
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2.5,
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              onChange={handleConfirmPass}
              error={!PasswordMatched}
              helperText={!PasswordMatched ? "Passwords do not match" : ""}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
            <Box sx={{ textAlign: "center" }}>
            <Link component={NavLink} to="/Login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 1,
          background: { xs: "#FFF", sm: "#FFF", md: "#FFF" },
        }}
      />
      <Box
        component="img"
        src={appLogo}
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
          justifyContent: { lg: "center", xl: "center" },
          height: { xs: 250, md: 500, lg: 500, xl: 500 },
          width: { xs: 250, md: 500, lg: 500, xl: 500 },
        }}
      />
    </Box>
  );
}

export default Register;
