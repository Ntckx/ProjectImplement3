import { Box, Button, Grid, Typography, createTheme, ThemeProvider } from "@mui/material";
import appLogo from "../assets/AppLogo.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { NavLink, useLocation } from "react-router-dom";

const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          "&:hover": {
            backgroundColor: "black",
          },
        },
      },
    },
  },
});

function Banner() {
  const location = useLocation();
  const isSettingPage = location.pathname === "/Setting";

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={4} md={3.9} lg={3.9}>
          <Box
            sx={{
              height: { xs: 30, sm: 70, md: 120, lg: 120, xl: 120 },
              width: { xs: 30, sm: 70, md: 120, lg: 120, xl: 120 },
              m: { xs: 3, sm: 3, md: 3, lg: 2, xl: 2 },
              ml: { xs: 0 },
            }}
            component="img"
            src={appLogo}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "raleway",
              fontWeight: "bold",
              color: "#4A7AFB",
              fontSize: {
                xs: "20px",
                small: "70px",
                md: "70px",
                lg: "70px",
              },
              textAlign: "center",
              margin: { xs: 3, sm: 5, md: 5, lg: 5 },
              ml: { xs: 1, sm: 5,md:0 },
              mt: 4,
              // width: 80,
            }}
          >
            JUSTPLAN
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt:{xs:2.5,sm:4},mr:{xs:-2} }}>
            {!isSettingPage && (
              <NavLink to="/Setting">
                <ThemeProvider theme={myTheme}>
                  <Button>
                    <AccountCircle sx={{ fontSize: { xs: "20px", sm: "20px", md: 80, lg: 80 } }} />
                  </Button>
                </ThemeProvider>
              </NavLink>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
