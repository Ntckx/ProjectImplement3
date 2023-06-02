import AccountCircle from "@mui/icons-material/AccountCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Banner from "../components/Banner.jsx";
import Navbar from "../components/Navbar.jsx";
const myTheme = createTheme({
  palette: {
    primary: {
      main: "#FC5C63",
    },
  },
});
function Setting() {
  return (
    <Box>
      <Banner />
      <Navbar />
      <Box sx={{ pt: { md: 10, lg: 10 } }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle
            sx={{
              color: "#4A7AFB",
              fontSize: { xs: 100, sm: 100, md: 200, lg: 200 },
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
              },
            }}
          >
            Thanatat Pineapplepen
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "raleway",
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
                pl: 5,
                pt: 5,
              }}
            >
              Change password
            </Typography>
            <Box sx={{ ml: { lg: 2 }, mt: { lg: 6 } }}>
              <NavigateNextIcon />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "raleway",
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
                pl: 5,
                pt: 5,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ ml: { lg: 2 }, mt: { lg: 6 } }}>
              <NavigateNextIcon />
            </Box>
            
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                md: "4rem",
                lg: "4rem",
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <ThemeProvider theme={myTheme}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    background:
                      "linear-gradient(50deg, rgba(252, 92, 99, 100%), rgba(252, 92, 99, 80%))",
                    padding: "0.5em",
                  }}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "25px",
                      lg: "25px",
                      xl: "25px",
                    },
                  }}
                >
                  Logout
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Setting;
