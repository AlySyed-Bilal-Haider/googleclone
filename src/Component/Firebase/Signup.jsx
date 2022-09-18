import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./Firebase";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
function Signup() {
  const navigate=useNavigate();
  const matches = useMediaQuery("(max-width:700px)");
  const [formvalues, setformvalues] = useState({
    email: "",
    password: "",
  });
  const Formhandler = async (e) => {
    e.preventDefault();
    const { email, password } = formvalues;
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (response) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        }
      );
      alert("user registered successfully");
    } catch (error) {
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    setformvalues({
      name: "",
      email: "",
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        mt: { md: 8, xs: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        autoComplete="off"
        onSubmit={Formhandler}
        style={{
          width: matches ? "90%" : "35%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          padding: "15px 0px",
          boxShadow: "5px 5px 5px lightgray,-5px -5px 5px lightgray",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            py: 1,
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Sign up Form
        </Typography>
        <br />
        <TextField
          sx={{ width: "95%", borderRadius: "4px" }}
          type="email"
          name="email"
          value={formvalues.email}
          placeholder="Email"
          variant="outlined"
          onChange={(e) => {
            setformvalues({ ...formvalues, email: e.target.value });
          }}
        />
        <br />
        <TextField
          sx={{ width: "95%", borderRadius: "4px" }}
          type="password"
          value={formvalues.password}
          name="password"
          placeholder="password"
          variant="outlined"
          onChange={(e) => {
            setformvalues({ ...formvalues, password: e.target.value });
          }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "95%", borderRadius: "4px" }}
        >
          save
        </Button>
      </form>
    </Box>
  );
}

export default Signup;
