import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { emailRegEx } from "../../utils/constants";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { details } from "../../redux/reducers/auth";

export default function Signup({ onSubmit }) {
  const classes = useStyles();
  const [translation] = useTranslation("translations");
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            {translation("signup.title")}
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
                  label={translation("signup.fName.label")}
                  error={Boolean(errors?.firstName)}
                  helperText={
                    errors?.firstName && translation("signup.fName.message")
                  }
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
                  label={translation("signup.lName.label")}
                  error={Boolean(errors?.lastName)}
                  helperText={
                    errors?.lastName && translation("signup.lName.message")
                  }
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
                  label={translation("signup.email.label")}
                  error={Boolean(errors?.email)}
                  helperText={
                    errors?.email && translation("signup.email.message")
                  }
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
                  label={translation("signup.password.label")}
                  type="password"
                  error={Boolean(errors?.password)}
                  helperText={
                    errors?.password && translation("signup.password.message")
                  }
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
              {!dispatch(details()) ? (
                <CircularProgress
                  style={{ color: "#fff", height: "20px", width: "20px" }}
                />
              ) : (
                translation("signup.submit")
              )}
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login">{translation("signup.linkText")}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

Signup.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
};
