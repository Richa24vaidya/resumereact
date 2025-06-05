import React from "react";
import Typography from "@material-ui/core/Typography";
import reactBg from '../images/react2.png';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "#000",
    textTransform: "uppercase",
  },
  // typedContainer: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  //   width: "100vw",
  //   textAlign: "center",
  //   zIndex: 1,

  //   [theme.breakpoints.down("md")]: {
  //     padding: ".5rem 1rem",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     padding: 0,
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     padding: "4rem 0.5rem",
  //   },
  // },
  typedContainer: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100vw",
  height: "78vh",
  textAlign: "center",
  zIndex: 1,
  padding: "0", // Remove internal space
  margin: "0",  // Remove any margin
  marginTop:"-17.5px",

  [theme.breakpoints.down("sm")]: {
    padding: "1rem", // Mobile safe padding
    marginTop: "30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "1rem", // Mobile safe padding
    marginTop:"-60px",
  },
}
}));
const Header = () => {
  const classes = useStyles();

  return (
    <Box
  className={classes.typedContainer}
  style={{
    position: "absolute",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
    backgroundImage: `url(${reactBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#EABD8C',
    backgroundSize: 'contain', // or '100px 100px', depending on your need
    backgroundPosition: 'center',
    padding: "8rem 1rem",
  }}
>

      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Richa Kharwa" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Richa Kharwa"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "React Developer",
            // "Native App Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
