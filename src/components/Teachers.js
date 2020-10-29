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
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "10em",
    width: "14em",
  },
  button: {
    width: "15em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(1.8),
    right: theme.spacing(3),
  },
  large: {
    margin: "0.5em",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const INNER_WIDTH = window.outerWidth;

const Teachers = ({ teachers }) => {
  const classes = useStyles();
  let history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const loc = useLocation();
  console.log(loc);
  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h5" component="h2">
          TEACHERS
        </Typography>
      </Grid>
      {teachers.map(({ name, photo, branch,school }) => {
        return (
          <Grid item xs={6} sm={4} lg={3}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {/* <CardMedia className={classes.media} image={photo} /> */}
              <Link to={`/schools/${school}/${name}`} style={{textDecoration:"none"}}>
                <Avatar className={classes.large} src={photo} >
                    {name}
                </Avatar>
              </Link>
              <div>
                <Typography variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {`${branch}`}
                </Typography>
              </div>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Teachers;
