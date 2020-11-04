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
import MenuBookIcon from "@material-ui/icons/MenuBook";
// import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "10em",
    // width: "14em",
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
  avatar: {
    margin: "0.5em",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  branchIcon: {
    margin: "0 0.8em",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  schoolIcon: {
    margin: "0 1.5em 0 -2.5em",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const INNER_WIDTH = window.outerWidth;

const Teachers = ({ teachers, showSchool, handleOpenForm }) => {
  const classes = useStyles();
  let history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const loc = useLocation();
  console.log(loc);
  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      <Grid item xs={10} sm={10} lg={10}>
        <Typography variant="h5" component="h2">
          TEACHERS
        </Typography>
      </Grid>
      {teachers.map(({ name, photo, branch, school, teacherID }) => {
        return (
          <Grid item xs={6} sm={4} lg={3} key={teacherID}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {/* <CardMedia className={classes.media} image={photo} /> */}
              <div>
                <Link
                  to={`/schools/${school}/${name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Avatar className={classes.avatar} src={photo}>
                    {name}
                  </Avatar>
                </Link>
                <MenuBookIcon className={classes.branchIcon} />
              </div>
              <div>
                <Typography variant="h6" style={{ margin: "1em 0" }}>
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ margin: "2em 0 1em 0" }}
                >
                  {branch}
                </Typography>
                {showSchool === true ? (
                  <div style={{ marginBottom: "1em" }}>
                    <AccountBalanceTwoToneIcon className={classes.schoolIcon} />
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ marginTop: "-2.5em" }}
                    >
                      {`${school} COLLEGE`}
                    </Typography>
                  </div>
                ) : null}
              </div>
            </Paper>
          </Grid>
        );
      })}
      {showSchool === true ? null : (
        <Grid item xs={6} sm={4} lg={3} key={"n"}>
          <Paper
            variant="outlined"
            elevation={3}
            style={{
              textAlign: "center",
              height: "8em",
            }}
          >
            <Tooltip
              title="Add New Teacher"
              //  onClick={handleOpenForm}
            >
              <Fab style={{ color: "green", marginTop: "2.5em" }}>
                <AddIcon style={{ width: "2em", height: "2em" }} />
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};
export default Teachers;
