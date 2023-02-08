import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, height: "18rem" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180 "
        image={props.post.cover}
      />
      <CardContent>
        <Link style={{textDecoration: "none", color: "inherit"}} to={"/blog/" + props.post._id}>
          <Typography
            sx={{ textAlign: "center", fontWeight: "700" }}
            gutterBottom={false}
            variant="h5"
            component="div"
            noWrap
          >
            {props.post.title}
          </Typography>
        </Link>
        <Typography
          sx={{ textAlign: "center", color: "grey" }}
          gutterBottom={false}
          variant="h6"
          component="div"
        >
          {props.post.author[0]
            ? "by " + props.post.author[0].firstName
            : "no author"}
        </Typography>
        <Typography
          gutterBottom={false}
          variant="subtitle2"
          component="div"
          sx={{ textAlign: "center", color: "darkgray" }}
        >
          Read time: {props.post.readTime.value} {props.post.readTime.unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
