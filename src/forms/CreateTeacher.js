import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  FormControl,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addTeacher: (teacher) => dispatch({ type: "ADD_TEACHER", teacher }),

    closeForm: () => dispatch({ type: "CLOSE_TEACHER_FORM" }),
  };
};
const mapStateToProps = (state) => {
  return {
    isOpen: state.teacherFormIsOpen,
    classrooms: state.classrooms,
  };
};
const styles = makeStyles((theme) => ({
  input: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
  avatar: {
    backgroundColor: "red",
    width: "2em",
    height: "2em",
    fontSize: "1em",
    margin: "0.1em",
    cursor: "pointer",
    "&:hover": {
      color: "green",
    },
  },
}));

const CreateTeacher = ({
  isOpen,
  closeForm,
  schoolName,
  addTeacher,
  classrooms,
}) => {
  const classroomToMap = classrooms.filter((cls) => cls.school === schoolName);
  const ID = uuidv4();

  const [state, setState] = React.useState({
    teacherID: `teacher${ID}`,
    name: "",
    school: schoolName,
    photo: "",
    branch: "",
    homeworks: [],
    classrooms: [],
  });
  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setState((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
      // classrooms: state.classrooms,
    }));
  };

  const handleAddTeacher = () => {
    addTeacher(state);
    setState({
      teacherID: "",
      name: "",
      school: schoolName,
      photo: "",
      branch: "",
      homeworks: [],
      classrooms: [],
    });
    closeForm();
  };
  const handleCloseForm = () => {
    setState({
      teacherID: "",
      name: "",
      school: "",
      photo: "",
      branch: "",
      homeworks: [],
      classrooms: [],
    });
    closeForm();
  };

  const deleteCLS = (cls) => {
    setState((prevState) => ({
      ...prevState,
      classrooms: state.classrooms.filter((clss) => clss !== cls),
    }));
  };

  const classes = styles();
  return (
    <div >
      <Dialog open={isOpen} onClose={handleCloseForm}>
        <DialogTitle>New Teacher</DialogTitle>
        <DialogContent>
          <DialogContentText>Add A New Teacher</DialogContentText>
          <FormControl>
            <TextField
              onChange={handleChange}
              value={state.name}
              margin="dense"
              name="name"
              label="Name"
              type="text"
              inputProps={{
                maxLength: "25",
              }}
              className={classes.input}
            />
            <TextField
              disabled
              value={schoolName}
              margin="dense"
              name="school"
              label="School"
              type="text"
              inputProps={{
                maxLength: "25",
              }}
              className={classes.input}
            />
            <TextField
              onChange={handleChange}
              value={state.branch}
              margin="dense"
              name="branch"
              label="Branch"
              type="text"
              inputProps={{
                maxLength: "25",
              }}
              className={classes.input}
            />

            <TextField
              select
              label="Classrooms"
              defaultValue="Choose classrooms"
            >
              {classroomToMap.map((classroom) => (
                <MenuItem
                  onClick={() =>
                    setState((prevState) => ({
                      ...prevState,
                      classrooms: state.classrooms.includes(classroom.name)
                        ? state.classrooms
                        : state.classrooms.concat(classroom.name),
                    }))
                  }
                  style={{ width: "4em" }}
                  value={classroom.name}
                >
                  {classroom.name}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {state.classrooms.map((classroom) => (
                <Avatar
                  className={classes.avatar}
                  onClick={() => deleteCLS(classroom)}
                >
                  {classroom}
                </Avatar>
              ))}
            </div>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <div onClick={handleCloseForm}>
            <Button color="secondary">Cancel</Button>
          </div>
          <div onClick={handleAddTeacher}>
            <Button color="default">Add</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Form = connect(mapStateToProps, mapDispatchToProps)(CreateTeacher);
export default Form;
