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

class CreateTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: props.teachers,
      newTeachers: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTeacherl = this.handleAddTeacher.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID = Math.floor(Math.random() * 10 + 2);
    e.preventDefault();
    this.setState({
      newTeacher: {
        teacherID: "",
        name: "",
        school: "",
        photo: "",
        branch: "",
        homeworks: [],
        classrooms: [],
      },
    });
  };

  handleAddTeacher= () => {
    this.state.teachers.push(this.state.newTeachers);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes } = this.props;
    return (
      <div>
        <Dialog open={formIsOpen} onClose={handleCloseForm}>
          <DialogTitle>New Teacher</DialogTitle>
          <DialogContent>
            <DialogContentText>Add A New Teacher</DialogContentText>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.name}
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
            <Button onClick={handleCloseForm} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleAddTeacher} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateTeacher);
