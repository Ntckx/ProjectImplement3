import {
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  TextField,
  Switch,
} from "@mui/material";
import { useState } from "react";
import axios from "../axios";

const myTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "white",
          borderColor: "white",
          "&:hover": {
            borderColor: "white",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 24,
          padding: 2,
          display: "flex",
        },
        switchBase: {
          padding: 1,
        },
        thumb: {
          width: 22,
          height: 22,
          boxShadow: "none",
        },
        track: {
          borderRadius: "12px",
          opacity: 1,
          backgroundColor: "#000",
        },
      },
    },
  },
});

function CreatePlan({ onCloseModal }) {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [Destination,setDestination] = useState("");
  const [Description, setDescription] = useState("");
  const createPost = async () => {
    try {
      await axios.post("/addCard", {
        Destination,
        Description,
      });
      onCloseModal();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2, pb: 10 }}>
        <Box
          sx={{
            height: {
              xs: "350px",
              sm: "300px",
              md: "400px",
              lg: "503px",
              xl: "503px",
            },
            width: {
              xs: "300px",
              sm: "300px",
              md: "794px",
              lg: "794px",
              xl: "794px",
            },
            background:
              "linear-gradient(to right, rgba(252,92,99,1), rgba(252,92,99,0.7))", 
            borderRadius: "50px",
            mr:{xs:2.5}
          }}
        >
          <Typography
            sx={{
              fontFamily: "raleway",
              color: "white",
              fontSize: { xs: "30px", small: "30px", md: "50px", lg: "55px" },
              textAlign: "center",
            }}
          >
            Create Your Plan
          </Typography>
          <Box sx={{ fontFamily: "raleway", display: "flex" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xs: "15px",
                  small: "20px",
                  md: "40px",
                  lg: "50px",
                  xl: "50px",
                },
                p: 2,
              }}
            >
              Destination:
            </Typography>
            <TextField
              required
              variant="outlined"
              // size={{ lg: "medium", md: "medium", sm: "medium", xs: "small" }}
              sx={{
                width: { xs: 90, sm: 100, md: 250, lg: 250 },
                left: { xs: 10, md: -10, lg: 0, xl: 0 },
                pt: { lg: 3 },
                color: "white",
                top: { md: 20, lg: 7, xl: 7 },
              }}
              value={Destination}
              onChange={(e)=>setDestination(e.target.value)}
            />
          </Box>
          <Box sx={{ fontFamily: "raleway", display: "flex" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xs: "15px",
                  small: "20px",
                  md: "40px",
                  lg: "50px",
                  xl: "50px",
                },
                p: 2,
              }}
            >
              Budget:
            </Typography>
            <ThemeProvider theme={myTheme}>
              <Switch
                checked={isToggleOn}
                onChange={handleToggle}
                sx={{ top: { xs: 15, sm: 15, md: 35, lg: 42 } }}
              />
            </ThemeProvider>
          </Box>
          <Box sx={{ fontFamily: "raleway", display: "flex" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xs: "15px",
                  small: "20px",
                  md: "40px",
                  lg: "50px",
                  xl: "50px",
                },
                p: 2,
              }}
            >
              Description:
            </Typography>
            {/* <TextField
              required
              variant="outlined"
              size={{ lg: "medium", md: "medium", sm: "medium", xs: "small" }}
              sx={{
                width: { xs: 90, sm: 100, md: 250, lg: 250 },
                left: { xs: 10, md: -10, lg: 0, xl: 0 },
                pt: { lg: 3 },
                color: "white",
                top: { md: 20, lg: 7, xl: 7 },
              }}
              inputProps={{
                style: {
                  color: "white",
                  fontFamily: "raleway",
                },
              }}
            /> */}
            <TextField
              // size={{ lg: "small", md: "medium", sm: "medium", xs: "small" }}
              multiline
              rows={3}
              sx={{
                width: { xs: 100, sm: 100, md: 250, lg: 250 },
                left: { xs: 10, md: -10, lg: 0, xl: 0 },
                pt: { lg: 3 },
                color: "white",
                top: { md: 20, lg: 7, xl: 7 },
              }}
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", pt: {  } }}
          >
            <ThemeProvider theme={myTheme}>
              <Button
                variant="outlined"
                onClick={createPost}
                sx={{ fontFamily: "raleway", fontSize: { sm: "10px", md: "10px", lg: "20px" },mt:{xs:2,lg:3} }}
              >
                Save
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreatePlan;
