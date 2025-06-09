import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    //  paddingTop: "30rem",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  skillTagContainer: {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "7px",
  padding: "1rem 0",
  animation: "$fadeIn 1.5s ease-in-out",
},
skillTag: {
  backgroundColor: "tan",
  color: "#233",
  borderRadius: "20px",
  padding: "4px 10px", // smaller padding
  fontSize: "0.75rem", // smaller font
  fontWeight: 500,
  display: "inline-block",
  textAlign: "center",
  boxShadow: "1px 2px 5px rgba(0,0,0,0.2)",
  transition: "all 0.2s ease-in-out",
  cursor: "default",
  //  [theme.breakpoints.down("xs")]: {
  //   gap: "7px",
  //   borderRadius:"10px",
  //   padding: "0.8rem 0",
  // },
  "&:hover": {
    backgroundColor: "tomato",
    color: "#fff",
    transform: "scale(1.05)",
  },
},

"@keyframes fadeIn": {
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
},

  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <span style={{ fontSize: "12px" }}>9.2024-11.2024</span>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
             Winonics
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             <Box className={classes.skillTagContainer}>
    <Box className={classes.skillTag}>JavaScript</Box>
    <Box className={classes.skillTag}>Jira</Box>
    <Box className={classes.skillTag}>HTML5</Box>
    <Box className={classes.skillTag}>CSS3</Box>
    <Box className={classes.skillTag}>TypeScript</Box>
     <Box className={classes.skillTag}>Php</Box>
    <Box className={classes.skillTag}>WordPress</Box>
    <Box className={classes.skillTag}>React.js</Box>
     <Box className={classes.skillTag}>MongoDB</Box>
  </Box>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <span style={{ fontSize: "12px" }}>6.2022-6.2024</span>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Devloops International
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             <Box className={classes.skillTagContainer}>
    <Box className={classes.skillTag}>HTML5</Box>
    <Box className={classes.skillTag}>CSS3</Box>
    <Box className={classes.skillTag}>JavaScript</Box>
    <Box className={classes.skillTag}>Bootstrap</Box>
    <Box className={classes.skillTag}>jQuery</Box>
     <Box className={classes.skillTag}>Figma</Box>
    <Box className={classes.skillTag}>WordPress</Box>
    <Box className={classes.skillTag}>React.js</Box>
  </Box>
          </Typography>
        </Box>
       <Typography
  variant="h2"
  className={`${classes.timeLineYear} ${classes.timeLineItem}`}
>
  <span style={{ fontSize: "12px" }}>6.2021-5.2022</span>
</Typography>

<Box component="div" className={classes.timeLineItem}>
  <Typography variant="h5" align="center" className={classes.subHeading}>
    Freelance Web Developer
  </Typography>
  <Typography variant="body1" align="center" className={classes.body1}>
    Freelancing
  </Typography>
  {/* <Typography variant="subtitle1" align="center" className={classes.subtitle1}>
    Worked with diverse clients across various industries delivering modern, responsive websites.
  </Typography> */}

  <Box className={classes.skillTagContainer}>
    <Box className={classes.skillTag}>HTML5</Box>
    <Box className={classes.skillTag}>CSS3</Box>
    <Box className={classes.skillTag}>JavaScript</Box>
    <Box className={classes.skillTag}>Bootstrap</Box>
    <Box className={classes.skillTag}>jQuery</Box>
     <Box className={classes.skillTag}>php</Box>
    <Box className={classes.skillTag}>MySql</Box>
    <Box className={classes.skillTag}>Filament</Box>
  </Box>
</Box>

      </Box>
    </Box>
  );
};

export default Resume;
