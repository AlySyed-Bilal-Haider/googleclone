import React, { useState, useContext, useEffect } from "react";
import { useStateContext } from "../Context/ContextAPI";
import { Box, Avatar, Typography } from "@mui/material";
import logo from "../assests/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, Link } from "react-router-dom";
import awater from "../assests/awater.jpg";
import Links from "./Links";
import { useDebounce } from "use-debounce";
function Navbar() {
  const [actionstate, setactionstate] = useState(false);
  const { results, setSearchTerm } = useStateContext();
  console.log("results", results);
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <Box
        sx={{
          overflowX: "hidden",
          width: { md: "100%", xs: "95%" },
          display: "flex",
          justifyContent: { md: "space-between", xs: "space-around" },
          alignItems: "center",
          p: 2,
          position: "sticky",
          top: "0px",
          backgroundColor: "white",
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: { md: "50%", xs: "80%" },
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mr: 8,
          }}
        >
          <Box sx={{display:"flex",alignItems:'center',flexDirection:'column'}}>
          <img
            src={logo}
            alt="Google clone"
            style={{ width: "120px", height: "55px", marginRight: "10px" }}
          />
          <Typography>
          <strong> Clone</strong><br/>
          Bilal Haider
          </Typography>
          </Box>
          <Box
            sx={{
              width: { md: "48%", xs: "80%" },
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "4px",
              ml:{md:2,xs:1}
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="search"
              style={{ width: "100%", border: "none", outline: "none" }}
            />
            <SearchIcon
              style={{
                float: "right",
                cursor: "pointer",
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
            alignItems: "center",
            mr: 2,
          }}
        >
          <SettingsIcon />
          <AppsIcon />
            <Avatar
              alt="Remy Sharp"
              sx={{ cursor: "pointer" }}
              src={awater}
              onClick={() => {
                setactionstate(true);
              }}
            />
           

        </Box>
      </Box>
      <Box
        sx={{
          width: "98%",
          display: { md: "none", xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid black",
          boxShadow:"5px 5px 5px lightgray",
          borderRadius: "4px",
          padding:"5px"
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="search"
          style={{ width: "100%", border: "none", outline: "none",padding:'5px' }}
        />
        <SearchIcon
          style={{
            float: "right",
            cursor: "pointer",
            backgroundColor: "rbga(0,0,0,0.6)",
            padding: "7px",
            border: "1px solid lightgray",
          }}
        />
      </Box>
      <Links />
    </>
  );
}

export default Navbar;
