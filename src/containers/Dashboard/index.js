import React from "react";
import { Grid } from "@mui/material";
import Card from "../../components/Dashboard/card";
import Chart from "../../components/Dashboard/chart";
import { useStyles } from "./styles";
const data = [
  { title: "Users", count: 2340 },
  { title: "Weekly Sales", count: 2340 },
  { title: "Products", count: 23 },
  { title: "Income", count: "$4500" },
];

function Home() {
  const classes = useStyles();
  return (
    <>
    <Grid item xs={12} className={classes.item}>
        <Chart />
      </Grid>
      {data.map((item, index) => {
        return (
          <Grid item key={index} xs={12} sm={6} md={3} className={classes.item}>
            <Card data={item} />
          </Grid>
        );
      })}
      
    </>
  );
}

export default Home;
