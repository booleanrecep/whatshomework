import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = (theme) => ({
  input: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
});
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    closeForm: () => dispatch({ type: "CLOSE_TEACHER_FORM" }),
    addTeacher: (teacher) => dispatch({ type: "ADD_TEACHER", teacher }),
  };
};
const mapStateToProps = (state) => {
  return {
    isOpen: state.teacherFormIsOpen,
  };
};
const CreateTeacher = ({ isOpen, closeForm, addTeacher, classes }) => {
  const [state, setState] = React.useState({
    teacherID: "",
    name: "",
    school: "",
    photo: "",
    branch: "",
    homeworks: [],
    classrooms: [],
  });
  const handleChange = (e) => {
    const ID = Math.floor(Math.random() * 10 + 2);
    e.preventDefault();
    setState({
      teacherID: ID,
      name: "",
      school: "",
      branch: "",
      classrooms: [],
    });
  };

  const handleAddTeacher = () => {
    addTeacher(state);
    closeForm();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={closeForm}>
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
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddTeacher} color="default">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateTeacher));
export default Form;
