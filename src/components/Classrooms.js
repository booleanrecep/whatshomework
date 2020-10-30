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
import { Tooltip, Fab, IconButton, Avatar } from "@material-ui/core";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import op from "../images/op.png";

import {
  Link,
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";
import CanvasDraw from "react-canvas-draw";
import mountains from "../images/imgs/mountaines.png";
import { assets } from "../images/svg/ecology/index";
import { schoolsData } from "../data";
import Appbar from "./Appbar";
import DneClass from "./DneClass";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "10em",
    // width: "14em",
  },
  button: {
    // width: "15em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  avatar: {
    backgroundColor: red[500],
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(1.8),
    right: theme.spacing(3),
  },
}));

const INNER_WIDTH = window.outerWidth;

const Classrooms = ({ classrooms }) => {
  const classes = useStyles();
  let history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const loc = useLocation();
  console.log(loc);
  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      <Grid item xs={10}>
        <Typography variant="h5" component="h2">
          CLASSROOMS
        </Typography>
      </Grid>
      {classrooms.map(({ name, image,school,classroomID }) => {
        return (
          <Grid item xs={6} sm={4} lg={3} key={classroomID}>
            <Paper variant="outlined" elevation={3}>
              <Link to={`/schools/${school}/${name}`} style={{textDecoration:"none"}}>
                <Avatar aria-label="recipe" className={classes.avatar} style={{ margin: "1em" }}>
                {name}
                </Avatar>
              </Link>
              
              <CardMedia className={classes.media} image={image} />
              {/* <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography> */}
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Classrooms;
