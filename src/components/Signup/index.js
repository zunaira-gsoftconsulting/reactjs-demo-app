import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { emailRegEx } from "../../utils/constants";
import { useStyles } from "./styles";

export default function Signup({ loading, onSubmit }) {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Grid container component={Paper} className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            Sign Up
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="firstName"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  error={Boolean(errors?.firstName)}
                  helperText={errors?.firstName && "First Name is required"}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  error={Boolean(errors?.lastName)}
                  helperText={errors?.lastName && "Last Name is required"}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue={""}
              rules={{ required: true, pattern: emailRegEx }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  error={Boolean(errors?.email)}
                  helperText={errors?.email && "Enter Valid Email"}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  error={Boolean(errors?.password)}
                  helperText={errors?.password && "Password is required"}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "#fff", height: "20px", width: "20px" }}
                />
              ) : (
                `Sign Up`
              )}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
