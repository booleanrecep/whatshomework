import React from "react";
import {
  Tooltip,
  Grid,
  Fab,
  Typography,
  withStyles,
  makeStyles,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Appbar from "./ui_components/Appbar";
// import TrDate from "tr-date";
// import Draggable from "react-draggable";
// import DneClass from "./components/DneClass";
// import { schoolsData } from "./data";
import Homeworks from "./data_components/Homeworks";
import Seo from "./components/Seo";
import LandingPage from "./ui_components/LandingPage";
import Schools from "./data_components/Schools";
import Teachers from "./data_components/Teachers";
import Classrooms from "./data_components/Classrooms";
import Branches from "./data_components/Branches";
import CreateSchool from "./forms/CreateSchool";
import CreateTeacher from "./forms/CreateTeacher";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { data: state };
};

const styles = makeStyles((theme) => ({
  absolute: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      // display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(0.5),
    right: theme.spacing(3),
  },
  footer: {
    position: "relative",
    bottom: "0",
    height: "6.7em",
    width: "100%",
    backgroundColor: "#BEE6E2",
  },
  copyright: {
    position: "absolute",
    left: "30%",
    bottom: "0.5em",
    [theme.breakpoints.down("sm")]: {
      left: "18%",
    },
  },
}));

const INNER_WIDTH = window.outerWidth; //For mobile screens
const App = ({ data }) => {
  const classes = styles();
  return (
    <Router>
      <div>
        {/* Helmet */}
        <Seo />

        <Grid container>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/schools">
              <Appbar header="SCHOOLS" INNER_WIDTH={INNER_WIDTH} />

              <Schools />
            </Route>
            <Route exact path="/teachers">
              <Appbar header="TEACHERS" INNER_WIDTH={INNER_WIDTH} />

              <Teachers showSchool={true} />
            </Route>
            {data.schools.map(({ name, image }) => {
              const schoolName = name;
              return (
                <Route exact path={`/schools/${name}`}>
                  <Appbar
                    INNER_WIDTH={INNER_WIDTH}
                    header={name + " COLLEGE"}
                  />
                  <Grid container spacing={2} style={{ marginTop: "5em" }}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <Paper
                        variant="outlined"
                        elevation={3}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "10em",
                          textAlign: "center",
                        }}
                      >
                        <CardMedia style={{ padding: "5em" }} image={image} />

                        <div>
                          <Typography variant="h5" component="h2">
                            {`WELLCOME TO ${name} COLLEGE`}
                          </Typography>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Teachers whichSchool={schoolName} />
                  <Classrooms whichSchool={schoolName} />
                  <Branches whichSchool={schoolName} />

                  <Link to="/schools">
                    <Tooltip
                      title="Anasayfa"
                      aria-label="anasayfa"
                      className={classes.absolute}
                    >
                      <Fab color="secondary">
                        <ArrowBackIcon />
                      </Fab>
                    </Tooltip>
                  </Link>
                </Route>
              );
            })}
            {data.teachers.map(
              ({ name, school, photo, branch, homeworks, classrooms }) => {
                return (
                  <Route path={`/schools/${school}/${name}`}>
                    <Appbar header={school + " COLLEGE " + "- " + name} />
                    <Classrooms
                      classrooms={data.classrooms.filter((classroom) =>
                        classrooms.includes(classroom.classroomID)
                      )}
                    />
                    <Homeworks
                      homeworks={data.homeworks.filter((homework) =>
                        homeworks.includes(homework.homeworkID)
                      )}
                    />
                    <Link to="/schools">
                      <Tooltip
                        title="Anasayfa"
                        aria-label="anasayfa"
                        className={classes.absolute}
                      >
                        <Fab color="secondary">
                          <ArrowBackIcon />
                        </Fab>
                      </Tooltip>
                    </Link>
                  </Route>
                );
              }
            )}

            {data.classrooms.map(
              ({ school, name, image, teachers, homeworks }) => {
                return (
                  <Route path={`/schools/${school}/${name}`}>
                    <Appbar header={school + " COLLEGE " + "- " + name} />
                    <Teachers />
                    <Homeworks
                      homeworks={data.homeworks.filter((homework) =>
                        homeworks.includes(homework.homeworkID)
                      )}
                    />
                    <Link to="/schools">
                      <Tooltip
                        title="Anasayfa"
                        aria-label="anasayfa"
                        className={classes.absolute}
                      >
                        <Fab color="secondary">
                          <ArrowBackIcon />
                        </Fab>
                      </Tooltip>
                    </Link>
                  </Route>
                );
              }
            )}
          </Switch>
        </Grid>
      </div>
    </Router>
  );
};

const MappedApp = connect(mapStateToProps)(App);
export default MappedApp;
