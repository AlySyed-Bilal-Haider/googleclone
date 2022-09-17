import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
function News({ results }) {
  return (
    <Box
      sx={{
        // width: "20%",
        display: "flex",
        flexWrap: "wrap",
        width: "100%%",
        flexDirection: "column",
        textAlign: "left",
        ml:{md:16,xs:2},
        mt:1
      }}
    >
      {results?.results?.map(({ link, title }, index) => {
        return (
          <>
            <Link to={link} target="_blank" rel="noreferrer">
              <Typography sx={{ fontSize: "12px",color:"#878A8D" }}>
                {link.length > 30 ? link.substring(0, 30) : link}
              </Typography>
              <Typography style={{
                fontSize:"16px",
                color:"blue",
                fontWeight:"bold"
              }}>{title}</Typography>
            </Link>
          </>
        );
      })}
    </Box>
  );
}

export default News;
