import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
import News from './News/News';
import { useStateContext } from "../Context/ContextAPI";

export const Results = () => {
  const { results, getResults, searchTerm } = useStateContext();
  const location = useLocation();
 console.log("results",results);
  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

//   if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
          <News results={results}/>
      );
    case "/images":
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap"
           
          }}
        >
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <Box sx={{ width: "80px",
              height: "50px",
              m:1}}>
              <a href={href} target="_blank" key={index} rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy" />
                <Typography>{title}</Typography>
              </a>
              </Box>
            )
          )}
        </Box>
      );
    case "/news":
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            flexDirection: "column",
            textAlign: "left",

          }}
        >
          {results?.entries?.map(({ id, links, source, title }) => (
            <Box key={id} sx={{width:'100%',m:1}}>
              <a href={links?.[0].href} target="_blank" rel="noreferrer ">
                <Typography>{title}</Typography>
              </a>
              <Box>
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {" "}
                  {source?.href}
                </a>
              </Box>
            </Box>
          ))}
        </Box>
      );
    case "/videos":
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems:'center',
            flexWrap: "wrap",
            width:'100%',
            mt:1
          }}
        >
          {results?.results?.map((video, index) => (
            <Box key={index} sx={{mt:1}}>
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </Box>
          ))}
        </Box>
      );
    default:
      return "Error...";
  }
};
