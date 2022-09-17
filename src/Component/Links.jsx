import React from "react";
import { Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/videos", text: "📺 Videos" },
  { url: "/images", text: "📸 Images" },
  { url: "/signup", text: "sing up" },
  { url: "/login",text: "Log in"},
];
function Links() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: {md:"flex-around",xs:'flex-start'},
        overflowX: "hidden",
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid lightgray",
      }}
    >
      <Box
        sx={{
          marginLeft: { md: "10%", xs: "0px" },
          width: { md: "30%", xs: "100%" },
        }}
      >
        {links.map(({ url, text },index) => (
          <Link
           key={index}
            to={url}
            style={{
              padding: "8px",
              fontSize: { md: "18px", xs: "12%" },
              textDecoration: "none",
            }}
          >
            {text}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Links;
