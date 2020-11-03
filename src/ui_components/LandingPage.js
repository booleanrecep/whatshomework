import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CanvasDraw from "react-canvas-draw";
import mountains from "../images/imgs/mountaines.png";
import { assets } from "../images/svg/ecology/index";
import Schools from "../data_components/Schools";
import Appbar from "../ui_components/Appbar";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: 100,
  },
  card: {
    textAlign:"center",
    position: "relative",
    top: "5em",
    // left: "5%",
    // zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      // top: "4em",
      // left: "30%",
    },
  },
}));

const INNER_WIDTH = window.outerWidth;
const LandingPage = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Grid container spacing={3}>
        <Appbar INNER_WIDTH={INNER_WIDTH} header="HOMEWORK FOLLOW" />
      <Grid item xs={6} sm={4} lg={3} className={classes.card}>
        <Link to="/schools" style={{textDecoration:"none"}}>
            <Paper variant="outlined" elevation={6}>
              <CardMedia
                className={classes.media}
                image={assets.a1}
                title="Contemplative Reptile"
              />
              <Button size="large" variant="contained" color="secondary">
                GO TO SCHOOLS
              </Button>
            </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} lg={3} className={classes.card}>
        <Link to="/teachers" style={{textDecoration:"none"}}>
            <Paper variant="outlined" elevation={6}>
              <CardMedia
                className={classes.media}
                image={assets.a2}
                title="Contemplative Reptile"
              />
              <Button size="large" variant="contained" color="secondary">
                GO TO TEACHERS
              </Button>
            </Paper>
        </Link>
      </Grid>
      
    </Grid>
  );
};
export default LandingPage;
