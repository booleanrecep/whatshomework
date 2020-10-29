import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { Tooltip, Fab, IconButton, Avatar } from "@material-ui/core";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import op from "../images/op.png";

import {
  Link,
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";
import CanvasDraw from "react-canvas-draw";
import mountains from "../images/imgs/mountaines.png";
import { assets } from "../images/svg/ecology/index";
import { schoolsData } from "../data";
import Appbar from "./Appbar";
import DneClass from "./DneClass";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
  },
  media: {
    height: "10em",
    // width: "14em",
  },
  button: {
    // width: "15em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  absoluteTop: {
    position: "fixed",
    top: theme.spacing(1.8),
    right: theme.spacing(3),
  },
}));

const INNER_WIDTH = window.outerWidth;

const Schools = ({schools}) => {
  const classes = useStyles();
  let history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const loc = useLocation();
  console.log(match);
  return (
    <Grid container spacing={2} style={{ marginTop: "4em" }}>
      {schools.map(({ image, name }) => {
        return (
          <>
            {/* <Link to={`${match.url}/${school}`}> */}
              <Grid item xs={6} sm={3} lg={4}>
                <Paper variant="outlined" elevation={3} style={{textAlign:"center"}}>
                  <CardMedia className={classes.media} image={image} />
                  <Button
                    onClick={() => history.push(`${match.url}/${name}`)}
                    size="large"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    {`${name} COLLEGE`}
                  </Button>
                </Paper>
              </Grid>
            {/* </Link> */}
            
          </>
        );
      })}
    </Grid>
  );
};
export default Schools;
