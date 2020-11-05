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
        teacherID: ``,
        name:"",
        branch:"",
        school:props.schoolName,
        photo: "",
        homeworks: [],
        classrooms: [],
    }
    this.teachers=props.teachers
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTeacher = this.handleAddTeacher.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID = Math.floor(Math.random() * 10 + 2);
    e.preventDefault();
    this.setState({
        teacherID: `teacher${ID}`,
        [e.target.name]: e.target.value,
       
    });
  };

  handleAddTeacher = () => {
    console.log(this.state)
    this.teachers.push(this.state);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes,schoolName } = this.props;
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
              <TextField
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
                onChange={this.handleChange}
                value={this.state.branch}
                margin="dense"
                name="branch"
                label="Branch"
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
