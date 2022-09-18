import React, { useState } from "react";
import { TextField, Button, Box,Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import {app} from './Firebase';
import { checkActionCode, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    const navigate=useNavigate();
    const matches = useMediaQuery('(max-width:700px)');
    const [Infostate, setInfostate] = useState({
        email: "",
        password:""
      });
        // ......get input value one by one.......
  const formHandle = (event) => {
    setInfostate({ ...Infostate, [event.target.name]: event.target.value });
  };
  const auth = getAuth(app);
  const loginhandler = async (e) => {
    e.preventDefault();
    const { email, password } = Infostate;
    const auth = getAuth(app);
    try {
      const data=await signInWithEmailAndPassword(auth, email, password);
      console.log("data",data);
    } catch (error) {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
      // console.log("errorMessage", errorMessage);
    };
   
    setInfostate({
        password: "",
      email: "",
    });
  }
 
  // this is use for sign In checkActionCode, if user signin already, then navigate another page.
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       navigate('/');
//     }
//   });
  return (
    <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     mt:{md:12,xs:6},
       
    }}
  >
    <form onSubmit={loginhandler} style={{width:matches?'90%':'35%',padding:"15px 0px",
     boxShadow:'5px 5px 5px lightgray,-5px -5px 5px lightgray'}}>
    <Typography sx={{fontWeight:"bold",py:1,textAlign:'center',fontSize:"18px"}}>Log in Form</Typography><br/>
    <TextField
        sx={{ width: { md: "98%", xs: "95%" }, margin: "5px" }}
        type="email"
        name="email"
        value={Infostate.email}
        placeholder="Email"
        variant="outlined"
        onChange={formHandle}
      /><br/>
      <TextField
        name="password"
        value={Infostate.password}
        sx={{ width: { md: "98%", xs: "95%" }, margin: "5px" }}
        type="password"
        placeholder="password"
        variant="outlined"
        onChange={formHandle}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: { md: "98%", xs: "95%" },ml:1,mt:1 }}
      >
        Login
      </Button>
    </form>
  </Box>
  )
}

export default Login