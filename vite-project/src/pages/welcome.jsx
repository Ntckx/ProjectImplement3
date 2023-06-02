import { Typography, createTheme, ThemeProvider } from "@mui/material";
import { Box, Button } from "@mui/material";
import "../styles/welcome.css";
import appLogo from "../assets/AppLogo.png";
import { NavLink } from "react-router-dom";
const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "black",
          fontWeight: "bold",
          color:"white"
        },
      },
    },
  },
});
function Welcome() {
  return (
    <Box sx={{ display: "flex", margin: 0, padding: 0, justifyContent:"center"}}>
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
            m: "auto",
            width: "80%",
            pt: 5,
          }}
        >
          JUSTPLAN
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "raleway",
            color: "black",
            fontSize: { xs: "20px", md: "40px" },
            textAlign: "center",
            m: "auto",
            width: "80%",
            pt: 5,
          }}
        >
          You should use this app to make your trip more <br />
          organized
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
          
            <ThemeProvider theme={myTheme}>
            <NavLink to="/Login">
              <Button
                variant="contained"
                sx={{
                  height: { xs: 40, md: 60, L: 60 },
                  width: 150,
                  alignItems: "center",
                }}
              >
                Login
              </Button>
              </NavLink>
            </ThemeProvider>
          
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "raleway",
            color: "black",
            fontSize: { xs: "20px", md: "26px", L: "26px" },
            textAlign: "center",
            m: "auto",
            width: "80%",
            pt: 1,
          }}
        >
          Or
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
           <ThemeProvider theme={myTheme}>
            <NavLink to="/Register">
              <Button
                variant="contained"
                sx={{
                  height: { xs: 40, md: 60, L: 60 },
                  width: 150,
                  alignItems: "center",
                }}
              >
                Register
              </Button>
              </NavLink>
            </ThemeProvider>
        </Box>
      </Box>

      <Box
        sx={{
          display:"flex",flexDirection:"column",justifyContent:"center",
          mb: 1, background:{xs: "#FFF", sm: "#FFF", md: "#FFF"}
        }}
      />
      <Box component="img"
        src={appLogo} sx={{display: {xs: "none", sm: "none", md: "none",lg:"flex",xl:"flex"},justifyContent:{lg:"center",xl:"center"},height: { xs: 250, md:500, lg:500,xl:500 },
          width: { xs: 250, md: 500, lg: 500,xl:500 },}}/>
    </Box>
  );
}

export default Welcome;
