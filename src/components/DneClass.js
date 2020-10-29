import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import Lottie from "react-lottie";
const DneClass = ({ image, name }) => {
  const match = useRouteMatch();
  return (
    <>
      <Grid item xs={12} sm={6} lg={3} key={name}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {`${name} SINIFI ÖDEVLERİ`}
              </Typography>
            </CardContent>
            <Link to={`${match.url}/${name}`}>
              <Lottie
                width={"100%"}
                height={"27em"}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: image,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};
export default DneClass;
