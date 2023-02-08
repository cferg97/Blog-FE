import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Image } from "mui-image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const Blog = () => {
  const allPosts = useSelector((state) => state.posts);
  const params = useParams();
  const postId = params.id;

  const selectedPost = allPosts.find((post) => post._id.toString() === postId);
  const comments = selectedPost.comments.map((comment) => (
    <>
      <ListItem>
        {comment.comment} | Posted at: {comment.addedOn}{" "}
      </ListItem>
      <Divider />
    </>
  ));

  return (
    <>
      {selectedPost && (
        <Container fluid>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              "& > :not(style)": {
                m: 3,
                width: "90vw",
                height: "80vh",
              },
            }}
          >
            <Paper elevation={3}>
              <Container fluid sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography variant="h2" noWrap={false}>
                  {selectedPost.title}
                </Typography>
                <Typography variant="h6">
                  {selectedPost.author[0]
                    ? "by " +
                      selectedPost.author[0].firstName +
                      " " +
                      selectedPost.author[0].lastName
                    : ""}
                </Typography>
                <Typography variant="caption">
                  Readtime: {selectedPost.readTime.value}{" "}
                  {selectedPost.readTime.unit}
                </Typography>
                <hr />
                <Image
                  fit="cover"
                  src={selectedPost.cover}
                  height={300}
                  showLoading={true}
                />
                <Typography
                  variant="body1"
                  sx={{ marginTop: "1rem" }}
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </Container>
            </Paper>
          </Box>

          <Typography sx={{ textAlign: "center" }} variant="h5">
            Comments
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              "& > :not(style)": {
                m: 3,
                width: "90vw",
              },
            }}
          >
            <Paper elevation={3} sx={{ width: "90%", textAlign: "center" }}>
              <List>{comments}</List>
            </Paper>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Blog;
