import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { getCurrentUserAction, getPostDataAction } from "./Components/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgMediaCard from "./Components/BlogCard";

const HomeComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDataAction());
    dispatch(getCurrentUserAction())
  }, []);

  const posts = useSelector((state) => state.posts);

  return (
    <>
      <Container
        fluid
        sx={{
          marginTop: "1rem",
          marginBottom: "2rem",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {posts.map((p) => (
              <Grid item xs={4}>
                <ImgMediaCard post={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomeComponent;
