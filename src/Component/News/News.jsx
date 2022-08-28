import React, { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
 import {
    Box,
    Container,
    Grid,
    Hidden,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  function News() {
  
  return (
   <Box sx={{width:"20%"}}>
    <Typography sx={{fontSize:'30px',fontWeight:'bold'}}>First news</Typography>
    <Typography>Sub heading</Typography>
   </Box>
  )
}

export default News