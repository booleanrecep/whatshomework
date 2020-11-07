import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  Tooltip,
  Fab,
  Avatar,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return { branches: state.branches };
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

const Branches = ({ branches, whichSchool }) => {
  const branchesToMap =
    whichSchool === undefined
      ? branches
      : branches.filter((branche) => branche.school === whichSchool);
  const classes = useStyles();
  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      <Grid item xs={10}>
        <Typography variant="h5" component="h2">
          BRANCHES
        </Typography>
      </Grid>
      {branchesToMap.map(({ name, school, branchID, teacher, homeworks }) => {
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
                <Typography
                  variant="subtitle1"
                  style={{ margin: "1.5em 0 0 0" }}
                >
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
                <Typography gutterBottom variant="h6">
                  {teacher}
                </Typography>
              </div>
            </Paper>
          </Grid>
        );
      })}
      <Grid item xs={6} sm={4} lg={3} key={"b"}>
        <Paper
          variant="outlined"
          elevation={3}
          style={{ textAlign: "center", height: "7.5em" }}
        >
          <Tooltip
            title="Add New Branch"
            //  onClick={handleOpenForm}
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
export default connect(mapStateToProps)(Branches);
