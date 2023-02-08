import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "./redux/actions";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userToRegister = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerAction(userToRegister));
    setFirstName("");
    setLastName("");
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
              <Typography variant="h4">Register</Typography>
              <FormGroup>
                <TextField
                  error={firstName === ""}
                  helperText={firstName === "" ? "Enter your first name!" : ""}
                  value={firstName}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setFirstName)
                  }
                  required
                  label="First Name"
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  error={lastName === ""}
                  helperText={lastName === "" ? "Enter your last name!" : ""}
                  value={lastName}
                  onChange={(e) => onChangeHandler(e.target.value, setLastName)}
                  required
                  label="Last Name"
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  error={email === ""}
                  helperText={firstName === "" ? "Enter your email address!" : ""}
                  value={email}
                  onChange={(e) => onChangeHandler(e.target.value, setEmail)}
                  required
                  label="Email"
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  error={password === ""}
                  helperText={password === "" ? "Enter a password!" : ""}
                  value={password}
                  onChange={(e) => onChangeHandler(e.target.value, setPassword)}
                  required
                  type="password"
                  label="Enter a password"
                />
              </FormGroup>

              <Button
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
                variant="contained"
              >
                Register
              </Button>
            </Container>
          </Box>
          <Container fluid>
              <p>Already registered?</p>
              <Link to="/login">Log in here</Link>
            </Container>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
