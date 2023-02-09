import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logInAction } from "./redux/actions";
import {FcGoogle} from "react-icons/fc"

const LogInPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userToLogIn = {
    email: email,
    password: password,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(logInAction(userToLogIn));
    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  return (
    <Container fluid>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          "& > :not(style)": {
            m: 3,
            width: "90vw",
            height: "80vh",
          },
        }}
      >
        <Paper
          sx={{
            backgroundColor: "lightgrey",
            textAlign: "center",
            justifyContent: "center",
          }}
          elevation={3}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              marginTop: 2,
              "& .MuiTextField-root": {
                m: 1,
              },
              "& > :not(style)": {
                m: 3,
                width: "50%",
                height: "100%",
              },
            }}
          >
            <Container
              fluid
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography variant="h4">Log In</Typography>

              <FormGroup>
                <TextField
                  value={email}
                  type="email"
                  onChange={(e) => onChangeHandler(e.target.value, setEmail)}
                  required
                  label="Email"
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  value={password}
                  onChange={(e) => onChangeHandler(e.target.value, setPassword)}
                  required
                  type="password"
                  label="Enter your password"
                />
              </FormGroup>

              <Button
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
                variant="contained"
              >
                Log In
              </Button>
            </Container>
          </Box>
          <Container fluid>
            <p>Not registered?</p>
            <Link to="/register">Register Here</Link>
          </Container>
          <Container fluid>
            <p>Or</p>

            <a href="http://localhost:3001/authors/googleLogin"><Button variant="outlined"><FcGoogle style={{marginRight: "5px"}}/> Sign In With Google</Button></a>
          </Container>
        </Paper>
      </Box>
    </Container>
  );
};

export default LogInPage;
