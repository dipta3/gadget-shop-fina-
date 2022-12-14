import React, { useState, useContext } from "react";
import {
  Container,
  Paper,
  Button,
  Stack,
  TextField,
  Typography,
  LinearProgress,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import axios from "axios";
import { contextStore } from "../utils/Store";
import Gohome from "./Gohome";
export default function SignIn({ urlPath, children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const { dispatch } = useContext(contextStore);
  const router = useRouter();

  //login
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    try {
      setShowLoading(true);
      const { data } = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });
      setShowLoading(false);

      if (email.localeCompare(data.email) === 0) {
        dispatch({ type: "USER_LOGIN", payload: data });
        if (data.isAdmin) {
          return router.push("/admin");
        } else {
          return router.push(urlPath ? urlPath : "/your-profile");
        }
      }
      setErr(data);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <Container sx={{ marginTop: "3px"}}>
      <Gohome></Gohome>
      <Paper
        variant="outlined"
        sx={{
          borderRadius:"20px",
          background:"#e8f5e9",
          width: { marginTop: "15px", xs: "100%", sm: "90%", md: "50%", margin: "auto" },
        }}
      >
        <LinearProgress sx={{ display: showLoading ? "block" : "none" }} />

        <form onSubmit={handleSubmit}>
          <Stack spacing={2} p={2}>
            <Typography fontSize="2.2rem" align="center"
            
            >
              <b> Log</b> In
            </Typography>
            
            <Typography component={"span"} align="center" sx={{ color: "red" }}>
              {err ? err : null}
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              color="secondary"
              label="Email Address"
              variant="outlined"
              placeholder="Type your email address"
              required
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              size="small"
              color="secondary"
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              placeholder="Type your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              variant="outlined"
              fullWidth
              sx={{ background: "#AFE1AF", color: "black" }}
              type="submit"
            >
              Log In
            </Button>
            <Typography component={"p"}>
              
            </Typography>
            <Typography component={"span"}>
              New to this site?
              <Link href={"/register"} passHref
             
              >
                 SignUp
              </Link>
            </Typography>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
