import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import {
  Container,
  Box,
  Paper,
  Typography,
  FormGroup,
  TextField,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newPostAction } from "./redux/actions";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [duration, setDuration] = useState("1");
  const author = useSelector((state) => state.user._id);

  const postToSend = {
    category: category,
    title: title,
    readTime: {
      value: duration,
      unit: "minutes",
    },
    content: content,
    cover: cover,
  };

  console.log(postToSend);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onPostHandler = (e) => {
    e.preventDefault();
    dispatch(newPostAction(postToSend));
    setContent("");
    setTitle("");
    setCategory("");
    setCover("");
    setDuration(1);
    navigate("/");
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
          },
        }}
      >
        <Paper
          sx={{
            backgroundColor: "white",
            textAlign: "center",
            justifyContent: "center",
          }}
          elevation={3}
        >
          <Typography variant="h5">Add a new post</Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              marginTop: 2,
              "& .MuiTextField-root": {},
              "& > :not(style)": {
                m: 1,
                width: "50%",
                height: "100%",
              },
            }}
          >
            <FormGroup>
              <TextField
                required
                label="Post Title"
                value={title}
                onChange={(e) => onChangeHandler(e.target.value, setTitle)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                required
                label="Post Category"
                value={category}
                onChange={(e) => onChangeHandler(e.target.value, setCategory)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                required
                label="Post Cover"
                value={cover}
                onChange={(e) => onChangeHandler(e.target.value, setCover)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                type="number"
                value={duration}
                onChange={(e) => onChangeHandler(e.target.value, setDuration)}
                required
                label="Read Time"
              />
            </FormGroup>
            <FormGroup>
              <TextField disabled value="minutes" required />
            </FormGroup>
          </Box>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
          <Button onClick={(e) => onPostHandler(e)} variant="contained">
            Add New Post
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default NewPost;
