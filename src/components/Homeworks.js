import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TimelapseRoundedIcon from "@material-ui/icons/TimelapseRounded";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Badge,
} from "@material-ui/core";
import {
  Link,
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";
import Calender from "./Calender";
import TrDate from "tr-date";
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

const Homeworks= ({ homeworks }) => {
  const classes = useStyles();
  const [fav, setFav] = React.useState({ favColor: "", favNum: "0" });
  const today = new TrDate();
  return (
    <Grid container spacing={2} style={{ marginTop: "1em" }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">
          HOMEWORKS
        </Typography>
      </Grid>

      {homeworks.map(
        ({
          onEditState,
          onDeleteState,
          homeworkID,
          classroom,
          start,
          end,
          topic,
          task,
          school,
        }) => {
          return (
            <Grid item xs={12} sm={4} lg={3} key={homeworkID}>
              <Card>
                <CardHeader
                  avatar={
                    <Link
                      to={`/schools/${school}/${classroom}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {classroom}
                      </Avatar>
                    </Link>
                  }
                  title={
                    <div style={{ height: "2em" }}>
                      <TimelapseRoundedIcon
                        style={{
                          marginLeft: "9em",
                          color:
                            end > today.getFullDate(".") ? "green" : "grey",
                        }}
                      />
                      <Typography
                        style={{
                          marginTop: "-1.8em",
                        }}
                        variant="body1"
                        color="textPrimary"
                      >
                        {topic}
                      </Typography>
                    </div>
                  }
                />

                <div
                  style={{
                    color: "blue",
                    border: "0.1em solid aqua",
                    pointerEvents: "none",
                    marginLeft: "0.05em",
                  }}
                >
                  <Calender baslama={start} bitis={end} />
                </div>

                <CardContent>
                  <Typography
                    align="left"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {task.substring(0, 38)}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {task.substring(38, 76)}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {task.substring(76, 112)}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {task.substring(112, 150)}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => {
                      setFav((prevState) => ({
                        ...prevState,
                        favColor: prevState.favColor === "red" ? "" : "red",
                        favNum: prevState.favNum === "0" ? +1 : "0",
                      }));
                    }}
                    aria-label="favorite"
                  >
                    <Badge badgeContent={fav.favNum} color="primary">
                      <FavoriteIcon style={{ color: fav.favColor }} />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    style={{ marginLeft: "7em" }}
                    id={homeworkID}
                    onClick={onEditState}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    id={homeworkID}
                    onClick={onDeleteState}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        }
      )}
    </Grid>
  );
};
export default Homeworks;
