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
import TrDate from "tr-date";
import Draggable from "react-draggable";
import Appbar from "./components/Appbar";
import DneClass from "./components/DneClass";
import Homeworks from "./components/Homeworks";
import CreateHomework from "./components/CreateHomework";
import EditHomework from "./components/EditHomework";
import Seo from "./components/Seo";
import LandingPage from "./components/LandingPage";
import Schools from "./components/Schools";
import Teachers from "./components/Teachers";
import Classrooms from "./components/Classrooms";
import { schoolsData } from "./data";

const styles = (theme) => ({
  absolute: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
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
      editState: "",
      openEdit: false,
      openCreate: false,
      activeDrags: 0,
      checked: false,
    };
    this.handleClickOpenCreate = this.handleClickOpenCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditState = this.onEditState.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.changeDateFormat = this.changeDateFormat.bind(this);
    // this.handlePopcreated = this.handlePopcreated.bind(this);
  }

  handleClickOpenCreate = () => {
    this.setState({ openCreate: true });
  };

  handleClose = () => {
    this.setState({ openCreate: false, openEdit: false });
  };
  handlePopcreated = () => {
    this.setState({ checked: true });
    setTimeout(() => {
      this.setState({
        checked: false,
      });
    }, 3000);
  };
  changeDateFormat = (date) => {
    const cd = new TrDate(date);
    return `${cd.getFullYear()}-${cd.getMonthNum()}-${cd.getDate()}`;
  };

  onEditState = (e) => {
    e.preventDefault();
    const findedClassroom = this.state.data.find(({ homeworks }) =>
      homeworks.find(({ id }) => id === parseInt(e.target.id))
    );
    const findHomework = findedClassroom.homeworks.find(
      (homework) => parseInt(homework.id) === parseInt(e.target.id)
    );
    const baslama = `${findHomework.baslama.substring(
      6,
      10
    )}-${findHomework.baslama.substring(3, 5)}-${findHomework.baslama.substring(
      0,
      2
    )}`;
    const bitis = `${findHomework.bitis.substring(
      6,
      10
    )}-${findHomework.bitis.substring(3, 5)}-${findHomework.bitis.substring(
      0,
      2
    )}`;

    this.setState({
      editState: Object.assign({ ...findHomework }, { baslama, bitis }),
      openEdit: true,
    });
  };
  handleChangeEdit = (e) => {
    e.preventDefault();
    e.persist();

    this.setState({
      editState: {
        ...this.state.editState,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitEdit = () => {
    let editedHomework;
    const newData = this.state.data.map((cls) => {
      const editedClassroom = cls.homeworks.map((homework) => {
        editedHomework =
          parseInt(homework.id) === parseInt(this.state.editState.id)
            ? ((this.state.editState.baslama = `${this.state.editState.baslama.substring(
                8,
                10
              )}.${this.state.editState.baslama.substring(
                5,
                7
              )}.${this.state.editState.baslama.substring(0, 4)}`),
              (this.state.editState.bitis = `${this.state.editState.bitis.substring(
                8,
                10
              )}.${this.state.editState.bitis.substring(
                5,
                7
              )}.${this.state.editState.bitis.substring(0, 4)}`),
              this.state.editState)
            : homework;
        return editedHomework;
      });
      cls.homeworks = editedClassroom;
      return cls;
    });
    this.setState({
      data: newData,
      openEdit: false,
    });
  };
  onDelete = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    this.setState({
      data: this.state.data.filter((cls, indx) => {
        return (cls.homeworks = cls.homeworks.filter(
          ({ id }) => id != targetId
        ));
      }),
      editState: "",
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
    return false;
  };

  render() {
    const { classes } = this.props;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

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
                  handleClickOpenCreate={this.handleClickOpenCreate}
                />

                <Schools schools={this.state.data.schools} />
              </Route>
              {this.state.data.schools.map(({ name, image }) => {
                return (
                  <Route exact path={`/schools/${name}`}>
                    <Appbar header={name} />
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
                            {/* <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {`${branch}`}
                            </Typography> */}
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Teachers
                      teachers={this.state.data.teachers.filter(
                        (teacher) => teacher.school === name
                      )}
                    />
                    <Classrooms
                      classrooms={this.state.data.classrooms.filter(
                        (classroom) => classroom.school === name
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
              })}
              {this.state.data.teachers.map(
                ({ name, school, photo, branch, homeworks, classrooms }) => {
                  return (
                    <Route path={`/schools/${school}/${name}`}>
                      <Appbar header={school + "-" + name} />
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
                      <Appbar header={school + "-" + name} />
                      <Teachers
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

              {/* <Route exact path="/odevler">
                <Appbar
                  checked={this.state.checked}
                  INNER_WIDTH={INNER_WIDTH}
                  handleClickOpenCreate={this.handleClickOpenCreate}
                />
                <Grid
                  container
                  spacing={2}
                  style={{ marginTop: "5em", marginBottom: "1em" }}
                >
                  <DneClass
                    onEditState={this.onEditState}
                    onDeleteState={this.onEditState}
                    state={this.state}
                  />
                </Grid>
                <Grid item xs={12} className={classes.footer}>
                  <Typography
                    color="textSecondary"
                    style={{ position: "absolute", left: "2%" }}
                  >
                    {`Hayatta en doğru yol gösterici bilimdir`}
                  </Typography>
                  <br />
                  <Typography
                    style={{
                      position: "absolute",
                      left: "30%",
                      marginTop: "0.5em",
                    }}
                    color="textSecondary"
                  >
                    {` Mustafa Kemal Atatürk`}
                  </Typography>
                  <Typography
                    className={classes.copyright}
                    color="textSecondary"
                  >
                    &#xA9; Copyright 2020 Recep ÖZTÜRK
                  </Typography>
                </Grid>
              </Route> */}

              {/* {this.state.data &&
                this.state.data.map(({ classroom, homeworks }) => {
                  return (
                    <Route path={`/odevler/${classroom}`}>
                      <Appbar
                        checked={this.state.checked}
                        INNER_WIDTH={INNER_WIDTH}
                        handleClickOpenCreate={this.handleClickOpenCreate}
                      />
                      <Grid container spacing={2} style={{ marginTop: "5em" }}>
                        {homeworks &&
                          homeworks.map((homework) => (
                            <Homework
                              onEditState={this.onEditState}
                              onDeleteState={this.onDelete}
                              {...homework}
                            />
                          ))}
                        <Draggable {...dragHandlers}>
                          <Link to="/odevler">
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
                        </Draggable>
                      </Grid>
                    </Route>
                  );
                })} */}
            </Switch>
            {/* <CreateHomework
              handlePopcreated={this.handlePopcreated}
              homeworkState={this.state.data}
              closeIt={this.handleClose}
              openIt={this.state.openCreate}
            />
            <EditHomework
              editState={this.state.editState}
              closeIt={this.handleClose}
              openIt={this.state.openEdit}
              handleChangeEdit={this.handleChangeEdit}
              handleSubmitEdit={this.handleSubmitEdit}
            /> */}
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
