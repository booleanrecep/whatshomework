import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  CardMedia,
  Tooltip,
  Fab,
  Avatar,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import { red } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return { classrooms: state.classrooms };
};
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

const Classrooms = ({ classrooms, whichSchool }) => {
  const classroomsToMap =
    whichSchool === undefined
      ? classrooms
      : classrooms.filter((classroom) => classroom.school === whichSchool);
  const classes = useStyles();

  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      <Grid item xs={10}>
        <Typography variant="h5" component="h2">
          CLASSROOMS
        </Typography>
      </Grid>
      {classroomsToMap.map(({ name, image, school, classroomID }) => {
        return (
          <Grid item xs={6} sm={4} lg={3} key={classroomID}>
            <Paper variant="outlined" elevation={3}>
              <Link
                to={`/schools/${school}/${name}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  style={{ margin: "1em" }}
                >
                  {name}
                </Avatar>
              </Link>

              <CardMedia className={classes.media} src={image} />
              {/* <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography> */}
            </Paper>
          </Grid>
        );
      })}
      <Grid item xs={6} sm={4} lg={3} key={"c"}>
        <Paper
          variant="outlined"
          elevation={3}
          style={{ textAlign: "center", height: "11em" }}
        >
          <Tooltip
            title="Add New Classroom"
            //  onClick={handleOpenForm}
          >
            <Fab style={{ color: "green", marginTop: "4em" }}>
              <AddIcon style={{ width: "2em", height: "2em" }} />
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default connect(mapStateToProps)(Classrooms);
