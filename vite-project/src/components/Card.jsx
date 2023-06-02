import { Box, Grid, Typography } from "@mui/material";

function Card(props) {
  return (
    <Box onClick={props.onClick}>
      <Box
        sx={{
          // display: "flex",
          height: {xs:100,lg:200},
          width: {xs:200,lg:250},
          background:
            "linear-gradient(to right, rgba(252,92,99,1), rgba(252,92,99,0.7))",
          borderRadius: "50px",
          fontFamily: "'Roboto Mono', monospace",
          p: 3,
          m:2
        }}
      >
        <Typography
          sx={{
            pt:{xs:5,lg:10},
            fontFamily: "raleway",
            fontSize: { lg: "20px" },
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {props.Destination}
        </Typography>
      </Box>
    </Box>
  );
}
export default Card;
