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
import { v4 as uuidv4 } from 'uuid';

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
    const ID =  uuidv4();
    e.preventDefault();
    this.setState({
        classroomID: `branch${ID}`,
        [e.target.name]: e.target.value,
       
    });
  };

  handleAddClassroom = () => {

    this.classrooms.push(this.state);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes,schoolName } = this.props;
    return (
      <div>
        <Dialog open={formIsOpen} onClose={handleCloseForm}>
          <DialogTitle>New Classroom</DialogTitle>
          <DialogContent>
            <DialogContentText>Add A New Classroom</DialogContentText>
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
