import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addSchool: (school) => dispatch({ type: "ADD_SCHOOL", school }),
    closeForm: () => dispatch({ type: "CLOSE_SCHOOL_FORM" }),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isOpen: state.schoolFormIsOpen,
  };
};
const styles = (theme) => ({
  input: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
});

const CreateSchool = ({ isOpen, closeForm, addSchool, classes }) => {
  const [state, setState] = React.useState({
    schoolID: "",
    image: "",
    name: "",
    teachers: [],
    students: [],
    classrooms: [],
    branches: [],
    homeworks: [],
  });
  const handleChange = (e) => {
    e.preventDefault();
    const ID = Math.floor(Math.random() * 10 + 2);
    setState({
      schoolID: ID,
      name: e.target.value,
    });
  };

  const handleAddSchool = () => {
    addSchool(state);
    closeForm();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={closeForm}>
        <DialogTitle>New School</DialogTitle>
        <DialogContent>
          <DialogContentText>Add A New School</DialogContentText>
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
          <Button onClick={handleAddSchool} color="default">
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
)(withStyles(styles)(CreateSchool));
export default Form;
