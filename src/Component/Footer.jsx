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
   <Box sx={{p:2,position:'absolute',bottom:'0px',textAlign:'center'}}>
 <Typography sx={{color:'black'}}> © 2022 Google, Inc.</Typography>
   </Box>
  )
}

export default Footer