import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Links = ({ value, nav }) => {
  return (
    <Grid container>
      <Grid item>
        <Link to={nav}>{value}</Link>
      </Grid>
    </Grid>
  );
};

export default Links;

Links.propTypes = {
  nav: PropTypes.string,
  value: PropTypes.any,
};
