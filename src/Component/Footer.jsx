import React from 'react'
import {
    Box,
    Container,
    Grid,
    Hidden,
    Typography,
    useMediaQuery,
  } from "@mui/material";
function Footer() {
  return (
   <Box sx={{position:'fixed',bottom:'0px',width:"100%"}}>
 <Typography sx={{color:'black',textAlign:'center'}}> © 2022 Google, Inc.</Typography>
   </Box>
  )
}

export default Footer