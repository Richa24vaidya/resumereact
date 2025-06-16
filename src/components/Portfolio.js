import React, { useState } from "react";
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

import project1 from "../images/herotts.png";
import project2 from "../images/abttts.png";
import project3 from "../images/javascript-fullstack.jpg";

const useStyles = makeStyles(() => ({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  cardContainer: {
    maxWidth: 384,
    margin: "3rem auto",
    maxHeight: 900,
  },
  mediaImage: {
    width: "100%",
    height: 320,
    objectFit: "contain", // if full img joiye toh cover nu contain
    display: "block",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 1300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
popupContent: {
  width: "90vw",
  maxWidth: 900,
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: 20,
  position: "relative",
  maxHeight: "90vh",
  overflowY: "auto",
  overflowX: "hidden",    // <-- Add this to prevent horizontal scroll
},

popupImage: {
  width: "100%",
  height: 400,
  objectFit: "contain",
  display: "block",
  userSelect: "none",
  overflowX: "hidden",   // <-- Add this too just in case
},
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    border: "none",
    fontSize: 30,
    cursor: "pointer",
  },
  popupDescription: {
    marginTop: 15,
  },
}));

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quaerat.",
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
  const [popupData, setPopupData] = useState(null); // { images, name, description }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const openPopup = (project) => {
    setPopupData(project);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupData(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center" spacing={4}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
          <Card className={classes.cardContainer}>
  <CardActionArea>
    <img
      src={project.images[0]}
      alt={project.name}
      className={classes.mediaImage}
    />
  </CardActionArea>
  {/* <CardContent>
    <Typography variant="h5" gutterBottom>
      {project.name}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {project.description}
    </Typography>
  </CardContent> */}
  <CardActions>
    <Button
      size="small"
      color="primary"
      onClick={() => openPopup(project)}
    >
      View More
    </Button>
  </CardActions>
</Card>

          </Grid>
        ))}
      </Grid>

      {popupData && (
        <div
          className={classes.popupOverlay}
          onClick={closePopup}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && closePopup()}
        >
          <div
            className={classes.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={classes.closeButton}
              onClick={closePopup}
              aria-label="Close popup"
            >
              &times;
            </button>
            <Slider {...sliderSettings}>
              {popupData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${popupData.name} ${idx + 1}`}
                  className={classes.popupImage}
                />
              ))}
            </Slider>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.popupDescription}
            >
              {popupData.description}
            </Typography>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Portfolio;
