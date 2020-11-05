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
import DneClass from "../components/DneClass";
import { red } from "@material-ui/core/colors";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "6em",
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

const Branches = ({ branches,handleOpenForm }) => {
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
          BRANCHES
        </Typography>
      </Grid>
      {branches.map(({ name, school, branchID, teacher, homeworks }) => {
        return (
          <Grid item xs={6} sm={4} lg={3} key={branchID}>
            <Paper variant="outlined" elevation={3}>
              <div
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MenuBookIcon
                  fontSize="large"
                  style={{ margin: "0.5em 0.5em 0.5em 0.5em" }}
                />
                <Typography  variant="subtitle1" style={{ margin: "1.5em 0 0 0" }} >
                  {name}
                </Typography>
              </div>
              <div
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Link
                  to={`/schools/${school}/${teacher}`}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Avatar
                    aria-label="recipe"
                    src={teacher}
                    className={classes.avatar}
                    style={{ margin: "0 0.5em 0.5em 0.7em" }}
                  >
                    {teacher}
                  </Avatar>
                </Link>
                <Typography gutterBottom variant="h6" >
                  {teacher}
                </Typography>
              </div>
            </Paper>
          </Grid>
        );
      })}
      <Grid item xs={6} sm={4} lg={3} key={"b"}>
        <Paper variant="outlined" elevation={3} style={{ textAlign: "center", height: "7.5em" }}>
          <Tooltip
            title="Add New Branch"
             onClick={handleOpenForm}
          >
            <Fab style={{ color: "green", marginTop: "2em" }}>
              <AddIcon style={{ width: "2em", height: "2em" }} />
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Branches;
