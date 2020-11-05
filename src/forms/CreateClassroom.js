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

class CreateClassroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        school:this.props.schoolName,
        name: "",
        image: "",
        classroomID: "",
        teachers: [],
        students: [],
        homeworks: [],
    }
    this.classrooms=props.classrooms
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClassroom= this.handleAddClassroom.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID = Math.floor(Math.random() * 10 + 2);
    e.preventDefault();
    this.setState({
        branchID: `branch${ID}`,
        [e.target.name]: e.target.value,
       
    });
  };

  handleAddClassroom = () => {
    console.log(this.state)
    this.classrooms.push(this.state);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes,schoolName } = this.props;
    return (
      <div>
        <Dialog open={formIsOpen} onClose={handleCloseForm}>
          <DialogTitle>New Branch</DialogTitle>
          <DialogContent>
            <DialogContentText>Add A New Branch</DialogContentText>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.name}
                margin="dense"
                name="name"
                label="Classroom"
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
              
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleAddClassroom} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateClassroom);
