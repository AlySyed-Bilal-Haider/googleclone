import React,{useState} from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {app} from './Firebase';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
function Signup() {
    const navigate=useNavigate();
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
        mt:{md:82,xs:6},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <form
        onSubmit={Formhandler}
        style={{
          width: "60%",
          padding: "5px 0px 5px 0px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <Typography sx={{fontWeight:"bold",py:2,textAlign:'center'}}>Sign up Form</Typography><br/>
        <TextField
          sx={{ width: { md: "50%", xs: "95%" } }}
          type="email"
          name="email"
          value={formvalues.email}
          label="Email"
          variant="outlined"
          onChange={(e)=>{
            setformvalues({...formvalues,email:e.target.value});
          }}
        />
        <br />
        <TextField
          sx={{ width: { md: "50%", xs: "95%" } }}
          type="password"
          value={formvalues.password}
          name="password"
          label="password"
          variant="outlined"
          onChange={(e)=>{
            setformvalues({...formvalues,password:e.target.value});
          }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: { md: "50%", xs: "95%" } }}
        >
          save
        </Button>
      </form>
    </Box>
  );
}

export default Signup;
