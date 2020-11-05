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

class CreateSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: props.schools,
      newSchool: {
        schoolID: "",
        image: "",
        name: "",
        teachers: [],
        students: [],
        classrooms: [],
        branches: [],
        homeworks: [],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSchool = this.handleAddSchool.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID =  uuidv4();
    e.preventDefault();
    this.setState({
      newSchool: {
        schoolID: `school${ID}`,
        image: "",
        name: e.target.value,
        teachers: [],
        students: [],
        classrooms: [],
        branches: [],
        homeworks: [],
      },
    });
  };

  handleAddSchool = () => {
    this.state.schools.push(this.state.newSchool);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes } = this.props;
    return (
      <div>
        <Dialog open={formIsOpen} onClose={handleCloseForm}>
          <DialogTitle>New School</DialogTitle>
          <DialogContent>
            <DialogContentText>Add A New School</DialogContentText>
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
            <Button onClick={this.handleAddSchool} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateSchool);
