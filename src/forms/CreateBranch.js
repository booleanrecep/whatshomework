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

class CreateBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        school: this.props.schoolName,
        branchID: "",
        teacher: "",
        homeworks: [],
        lessons: [],
    }
    this.branches=props.branches
    this.handleChange = this.handleChange.bind(this);
    this.handleAddBranch = this.handleAddBranch.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID = uuidv4();
    e.preventDefault();
    this.setState({
        branchID: `branch${ID}`,
        [e.target.name]: e.target.value,
       
    });
  };

  handleAddBranch = () => {
    this.branches.push(this.state);
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
                label="Branch"
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
                value={this.state.teacher}
                margin="dense"
                name="teacher"
                label="Teacher"
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
            <Button onClick={this.handleAddBranch} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateBranch);
