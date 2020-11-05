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
  Avatar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const styles = (theme) => ({
  input: {
    width: "14em",
    [theme.breakpoints.up("sm")]: {
      width: "18em",
    },
  },
  avatar: {
    backgroundColor: "red",
    width: "2em",
    height: "2em",
    fontSize: "1em",
    margin:"0.1em",
    cursor:"pointer",
    "&:hover":{
      color:"green"
    }
  },
});

class CreateTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherID: ``,
      name: "",
      branch: "",
      school: props.schoolName,
      photo: "",
      homeworks: [],
      classrooms: [],
    };
    this.data = props.data;
    this.teachers = props.teachers;
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTeacher = this.handleAddTeacher.bind(this);
    this.closeForm = props.handleCloseForm;
  }
  handleChange = (e) => {
    const ID = uuidv4();
    e.preventDefault();
    this.setState({
      teacherID: `teacher${ID}`,
      [e.target.name]: e.target.value,
      // classrooms: this.state.classrooms.concat(e.target.value),
    });
  };

  handleAddTeacher = () => {
    this.teachers.push(this.state);
    this.setState({
      teacherID: ``,
      name: "",
      branch: "",
      school: "",
      photo: "",
      homeworks: [],
      classrooms: [],
    })
    this.closeForm();
  }
    
  deleteCLS=(cls)=>{
      this.setState({
        classrooms:this.state.classrooms.filter(clss => clss !==cls)
      })
  }

  render() {
    const { formIsOpen, handleCloseForm, classes, schoolName } = this.props;
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
              disabled
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

              <TextField
                select
                label="Classrooms"
                value={this.state.classrooms.toString()}
              >
                {this.data.classrooms
                  .filter((classroom) => classroom.school === schoolName)
                  .map((classroom) => (
                    <MenuItem
                      onClick={() =>
                        this.setState({
                          classrooms: this.state.classrooms.concat(
                            classroom.name
                          ),
                        })
                        
                      }
                      style={{ width: "4em" }}
                      value={classroom.name}
                    >
                      {classroom.name}
                    </MenuItem>
                  ))}
              </TextField>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {this.state.classrooms.map((classroom) => (
                  <Avatar className={classes.avatar} onClick={()=>this.deleteCLS(classroom)}>
                    {classroom}
                  </Avatar>
                ))}
              </div>
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
