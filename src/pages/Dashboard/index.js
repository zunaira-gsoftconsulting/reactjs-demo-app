import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import DashboardContainer from "../../containers/Dashboard";
import {useStyles} from "./styles"

function Home() {
  const classes=useStyles()
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
     <DashboardContainer/>
    </Grid>
  );
}

export default Home;
