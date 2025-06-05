import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../avatar.png"; // Replace with your image path

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: "#1e1e2f",
    background:"white",
    minHeight: "140vh",
     paddingTop: "43rem",
     width:"100%",
  },
  avatarBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    boxShadow: "0 0 0 5px tomato",
  },
  textBoxx: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2), // 16px
      paddingRight: theme.spacing(2), // Optional: Add if needed
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  textBox: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
  },
  heading: {
    color: "tomato",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#cfcfcf",
  },
}));



const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer} id="about">
      <Grid container spacing={4} alignItems="center">
        {/* Left: Image */}
        <Grid item xs={12} md={5} className={classes.avatarBox}>
          <Avatar alt="Profile Picture" src={avatar} className={classes.avatar} />
        </Grid>

        {/* Right: Text */}
        <Grid item xs={12} md={7} className={classes.textBox}>
          <Typography variant="h4" className={classes.heading} className={classes.textBoxx}>
            About Me
          </Typography>
          <Typography variant="body1" className={classes.paragraph} style={{ color: 'black' }} className={classes.textBoxx}>
          Hi there! 👋<br/>
          I'm <b>Richa Kharwa</b>, a passionate Front-End Developer with <b><span style={{ color:'orangered' }}>3+ years</span></b>  of experience crafting responsive, user-friendly <br/>
           web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. I specialize in building scalable, high-performance UIs that deliver seamless user experiences.

          With a strong foundation in component-based architecture, <br/>API integration, and state management <b><span style={{ color:'orangered' }}>(Redux, Context API)</span></b>, I bring both creativity and logic to front-end challenges. I'm known for my clean code, pixel-perfect designs, and team-first mindset.<br/>
          🔍 Actively seeking opportunities to contribute to innovative projects and grow with a forward-thinking team. Let's build something great together!<br/> <span style={{ color:'orangered' }}>Thank You !</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
