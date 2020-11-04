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

import {connect} from "react-redux"
import {addSchool} from "../redux_files/actions/index"

function mapDispatchToProps(dispatch){
  return {addSchool:school => dispatch(addSchool(school))}
}

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
    const ID = Math.floor(Math.random() * 10 + 2);
    e.preventDefault();
    this.setState({
      newSchool: {
        schoolID: ID,
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
    this.props.addSchool(this.state.newSchool)
    // this.state.schools.push(this.state.newSchool);
    this.closeForm();
  };

  render() {
    const { formIsOpen, handleCloseForm, classes } = this.props;
    console.log(this.state.schools);
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
const Form = connect(
  null,
  mapDispatchToProps
)(CreateSchool)
export default withStyles(styles)(Form);
