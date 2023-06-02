import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import Banner from "./Banner";
import Navbar from "./Navbar";
const myTheme = createTheme({
    palette: {
      primary: {
        main: '#FC5C63',
      },
    },
  });
function NoPlan(){
    return(

        <Box>
        <Banner/>
        <Navbar/>
        
        <Typography
        variant="h3"
        sx={{
          fontFamily: "raleway",
          color: "black",
          fontSize: { xs: "20px", md: "50px" },
          textAlign: "center",
          margin:{lg:3},
          mt:{lg:10}
        }}
      >
        Your Plan
      </Typography> 
      <Typography
        variant="h3"
        sx={{
          fontFamily: "raleway",
          color: "black",
          fontSize: { xs: "10px", md: "40px" },
          textAlign: "center",
          margin: 3,
          mt: 10,
          lineHeight:1.5
        }}
      >
        You currently <br/>have no plan<br/> to go to anywhere.
      </Typography> 

      <Box sx={{p:2,display:"flex",justifyContent:"center"}}>
    <ThemeProvider theme={myTheme}>
      <Button
        variant="contained"
        color="primary"
        style={{
          background:
            'linear-gradient(50deg, rgba(252, 92, 99, 100%), rgba(252, 92, 99, 60%))',
          padding: "0.5em",
        }}sx={{fontSize:{xs:"10px",sm:"10px",md:"25px",lg:"25px",xl:"25px"},borderRadius:"200px"}}
      >
        Create Plan
      </Button>
    </ThemeProvider>
    </Box>

        </Box>
    )
}
export default NoPlan;