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
import DeleteIcon from "@material-ui/icons/Delete";

import op from "../images/op.png";
import CreateSchool from "../forms/CreateSchool";
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
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { TrainOutlined } from "@material-ui/icons";

const mapStateToProps = (state) => {
  return { schools: state.schools };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openForm: () => dispatch({ type: "OPEN_SCHOOL_FORM" }),
    deleteSchool: (school) => dispatch({ type: "DELETE_SCHOOL", school }),
  };
};
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "10em",
    // width: "14em",
  },
  title: {
    display: "block",
  },
}));

const INNER_WIDTH = window.outerWidth;

const Schools = ({ schools, openForm, deleteSchool }) => {
  const classes = useStyles();
  let history = useHistory();
  const match = useRouteMatch();

  return (
    <Grid container spacing={2} style={{ marginTop: "5em" }}>
      {schools &&
        schools.map(({ image, name, schoolId }) => {
          return (
            <>
              <Grid item xs={6} sm={3} lg={4} key={schoolId}>
                <Paper
                  variant="outlined"
                  elevation={3}
                  style={{ textAlign: "center" }}
                >
                  <DeleteIcon
                    style={{ marginLeft: "5em", cursor: "pointer" }}
                    onClick={() => deleteSchool(name)}
                  />
                  <CardMedia className={classes.media} image={image} />
                  <Button
                    onClick={() => history.push(`${match.url}/${name}`)}
                    size="large"
                    variant="contained"
                    color="secondary"
                  >
                    {`${name} COLLEGE`}
                  </Button>
                </Paper>
              </Grid>
            </>
          );
        })}
      <Grid item xs={6} sm={3} lg={4} key={"a"}>
        <Paper
          variant="outlined"
          elevation={3}
          style={{ textAlign: "center", height: "12.5em" }}
        >
          <Tooltip title="Add New School" onClick={openForm}>
            <Fab style={{ color: "green", marginTop: "5em" }}>
              <AddIcon style={{ width: "2em", height: "2em" }} />
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
      <CreateSchool />
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Schools);
