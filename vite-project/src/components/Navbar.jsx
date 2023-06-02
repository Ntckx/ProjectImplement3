import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
function Navbar(){
  const [isActive, setIsActive] = useState(true)
    return(
      <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: {
            xs: "center",
            sm: "center",
            lg: "flex-end",
            xl: "flex-end",
          },
        }}
      >
        <nav>
        <Box sx={{p:1}}>
          <NavLink
            end
            to="/Cards"
            className={
              isActive ? "activeClassName" : undefined
            }
          >
          
            Cards
          </NavLink>
          </Box>
          <NavLink
            to="/Setting"
            className={
              isActive ? "activeClassName" : undefined
            }
          >
            Setting
          </NavLink>
        </nav>
      </Box>
    </Box>
    )
}
export default Navbar;