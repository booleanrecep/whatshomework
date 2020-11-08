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
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const mapDispatchToProps = (dispatch) => {
  return {
    addSchool: (school) => dispatch({ type: "ADD_SCHOOL", school }),
    closeForm: () => dispatch({ type: "CLOSE_SCHOOL_FORM" }),
  };
};
const mapStateToProps = (state) => {
  return {
    isOpen: state.schoolFormIsOpen,
  };
};
const styles = makeStyles((theme) => ({
  input: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
}));

const CreateSchool = ({ isOpen, closeForm, addSchool }) => {
  const ID = uuidv4();

  const classes = styles();
  const [state, setState] = React.useState({
    schoolID: `school${ID}`,
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
    setState({
      name: e.target.value,
    });
  };

  const handleAddSchool = () => {
    addSchool(state);
    closeForm();
    setState({});
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

const Form = connect(mapStateToProps, mapDispatchToProps)(CreateSchool);
export default Form;
