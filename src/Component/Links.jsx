import React from 'react';
import {
    Avatar,
    Box
  } from "@mui/material";
  import { Link } from 'react-router-dom';
const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/videos', text: '📺 Videos' },
  ];
function Links() {
  return (
    <Box  sx={{width:'100%',display:'flex',justifyContent:'flex-around',
    overflowX:'hidden',
    alignItems:'center',py:2,borderBottom:'1px solid lightgray'}}>
      <Box sx={{marginLeft:{md:'10%',xs:"10px"},width:"30%"}}>
      {links.map(({ url, text }) => (
        <a href={url} style={{padding:'10px',fontSize:{md:"18px",xs:'12%'},textDecoration:"none"}}>{text}</a>
      ))}
      </Box>
    </Box>
  )
}

export default Links