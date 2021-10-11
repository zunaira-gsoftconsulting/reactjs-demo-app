import { Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ColorModeContext } from "../utils/context";
function Home() {
  const history = useHistory();
  const colorMode = React.useContext(ColorModeContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <Grid container>
      <Stack spacing={2} direction="row">
        <Button onClick={colorMode.toggleColorMode}>Change Color</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Typography variant="button">Text</Typography>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}

export default Home;
