import React from "react";
import {
  Tooltip,
  Grid,
  Fab,
  Typography,
  withStyles,
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
import CreateBranch from "./forms/CreateBranch";
import CreateClassroom from "./forms/CreateClassroom";

const styles = (theme) => ({
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
});

const INNER_WIDTH = window.outerWidth; //For mobile screens
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      schoolFormIsOpen: false,
      teacherFormIsOpen: false,
      branchFormIsOpen: false,
      classroomFormIsOpen: false,
    };
    this.handleOpenSchoolForm = this.handleOpenSchoolForm.bind(this);
    this.handleCloseSchoolForm = this.handleCloseSchoolForm.bind(this);
    this.handleOpenTeacherForm = this.handleOpenTeacherForm.bind(this);
    this.handleCloseTeacherForm = this.handleCloseTeacherForm.bind(this);
    this.handleOpenBranchForm = this.handleOpenBranchForm.bind(this);
    this.handleCloseBranchForm = this.handleCloseBranchForm.bind(this);
    this.handleOpenClassroomForm = this.handleOpenClassroomForm.bind(this);
    this.handleCloseClassroomForm = this.handleCloseClassroomForm.bind(this);
  }

  handleOpenSchoolForm = () => {
    this.setState({
      schoolFormIsOpen: true,
    });
  };
  handleCloseSchoolForm = () => {
    this.setState({
      schoolFormIsOpen: false,
    });
  };
  handleOpenTeacherForm = () => {
    this.setState({
      teacherFormIsOpen: true,
    });
  };
  handleCloseTeacherForm = () => {
    this.setState({
      teacherFormIsOpen: false,
    });
  };
  handleOpenBranchForm = () => {
    this.setState({
      branchFormIsOpen: true,
    });
  };
  handleCloseBranchForm = () => {
    this.setState({
      branchFormIsOpen: false,
    });
  };
  handleOpenClassroomForm = () => {
    this.setState({
      classroomFormIsOpen: true,
    });
  };
  handleCloseClassroomForm = () => {
    this.setState({
      classroomFormIsOpen: false,
    });
  };
  render() {
    const { classes } = this.props;

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
                <Appbar
                  header="SCHOOLS"
                  checked={this.state.checked}
                  INNER_WIDTH={INNER_WIDTH}
                />

                <Schools
                  schools={this.state.data.schools}
                  handleOpenForm={this.handleOpenSchoolForm}
                />
                <CreateSchool
                  handleCloseForm={this.handleCloseSchoolForm}
                  formIsOpen={this.state.schoolFormIsOpen}
                  schools={this.state.data.schools}
                />
              </Route>
              <Route exact path="/teachers">
                <Appbar
                  header="TEACHERS"
                  checked={this.state.checked}
                  INNER_WIDTH={INNER_WIDTH}
                />

                <Teachers
                  // handleOpenForm={this.handleOpenForm}
                  showSchool={true}
                  teachers={this.state.data.teachers}
                />
              </Route>
              {this.state.data.schools.map(({ name, image }) => {
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

                    <Teachers
                      handleOpenForm={this.handleOpenTeacherForm}
                      teachers={this.state.data.teachers.filter(
                        (teacher) => teacher.school === name
                      )}
                    />
                    <CreateTeacher
                      schoolName={schoolName}
                      handleCloseForm={this.handleCloseTeacherForm}
                      formIsOpen={this.state.teacherFormIsOpen}
                      teachers={this.state.data.teachers}
                    />
                    
                    <Classrooms
                     handleOpenForm={this.handleOpenClassroomForm}
                      classrooms={this.state.data.classrooms.filter(
                        (classroom) => classroom.school === name
                      )}
                    />
                    <CreateClassroom
                      schoolName={schoolName}
                      handleCloseForm={this.handleCloseClassroomForm}
                      formIsOpen={this.state.classroomFormIsOpen}
                      classrooms={this.state.data.classrooms}
                    />
                    <Branches
                     handleOpenForm={this.handleOpenBranchForm}
                      branches={this.state.data.branches.filter(
                        (branch) => branch.school === name
                      )}
                    />
                    <CreateBranch
                      schoolName={schoolName}
                      handleCloseForm={this.handleCloseBranchForm}
                      formIsOpen={this.state.branchFormIsOpen}
                      branches={this.state.data.branches}
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
              })}
              {this.state.data.teachers.map(
                ({ name, school, photo, branch, homeworks, classrooms }) => {
                  return (
                    <Route path={`/schools/${school}/${name}`}>
                      <Appbar header={school + " COLLEGE " + "- " + name} />
                      <Classrooms
                        classrooms={this.state.data.classrooms.filter(
                          (classroom) =>
                            classrooms.includes(classroom.classroomID)
                        )}
                      />
                      <Homeworks
                        homeworks={this.state.data.homeworks.filter(
                          (homework) => homeworks.includes(homework.homeworkID)
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

              {this.state.data.classrooms.map(
                ({ school, name, image, teachers, homeworks }) => {
                  return (
                    <Route path={`/schools/${school}/${name}`}>
                      <Appbar header={school + " COLLEGE " + "- " + name} />
                      <Teachers
                        handleOpenForm={this.handleOpenForm}
                        teachers={this.state.data.teachers.filter((teacher) =>
                          teachers.includes(teacher.teacherID)
                        )}
                      />
                      <Homeworks
                        homeworks={this.state.data.homeworks.filter(
                          (homework) => homeworks.includes(homework.homeworkID)
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
  }
}

export default withStyles(styles)(App);
