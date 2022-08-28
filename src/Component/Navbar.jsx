import React,{useState} from "react";
import {
  Box,
  Avatar
} from "@mui/material";
import logo from '../assests/logo.png';
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate,Link } from "react-router-dom";
import awater from '../assests/awater.jpg';
import Links from './Links';
function Navbar() {

  const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();
//   const onhandleSubmit = (e) => {
//     e.preventDefault();
//   };
  return (
    <>
      <Box
        sx={{
          overflowX:'hidden',
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          position: "sticky",
          top: "0px",
          backgroundColor:'white',
          zIndex:100
        }}
      >
        <Box
          sx={{
            width: {md:"50%",xs:"80%"},
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mr:8
          }}
        >
          <img
            src={logo}
            alt="Google clone"
            style={{ width: "120px", height: "55px",marginRight:'10px' }}
          />
         <Box
            sx={{
              width: {md:"48%",xs:"70%"},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border:'1px solid black',borderRadius:'4px',
             
            }}
          >

            <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search"
              style={{ width: "100%", border: "none", outline: "none" }}
            />
            <SearchIcon
              style={{
                float: "right",
                cursor:"pointer",
                backgroundColor: "rbga(0,0,0,0.6)",
                padding: "7px",
                border: "1px solid lightgray",
              }}
             
            />
          </Box>
        </Box>
       
          <Box
          sx={{
            width: "10%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",mr:2
          }}
        >
          <SettingsIcon />
          <AppsIcon />
          <Avatar alt="Remy Sharp" src={awater} />
        </Box>
      </Box>
      <Links/>
    </>
  );
}

export default Navbar;
