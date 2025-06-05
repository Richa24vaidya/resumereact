import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
// import hover1 from "../images/hover1.jpg";
// import hover2 from "../images/hover2.jpg";
// import hover3 from "../images/hover3.jpg";

const useStyles = makeStyles(() => ({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  cardContainer: {
    maxWidth: 384,
    margin: "3rem auto",
    maxHeight: 500,
  },
  mediaImage: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui",
    images: [project1, project2],
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    images: [project2, project3],
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    images: [project3, project1],
  },
];

const Portfolio = () => {
  const classes = useStyles();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <Slider {...sliderSettings}>
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.name} ${index + 1}`}
                      className={classes.mediaImage}
                    />
                  ))}
                </Slider>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
