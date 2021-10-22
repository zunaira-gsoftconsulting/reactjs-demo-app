import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import DashboardContainer from "../../containers/Dashboard";
import { useStyles } from "./styles";

function Dashboard() {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <Typography variant="h4">{translation("dashboard.title")}</Typography>
      </Grid>
      <DashboardContainer />
    </Grid>
  );
}

export default Dashboard;
