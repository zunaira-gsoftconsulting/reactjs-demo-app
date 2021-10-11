import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CircularProgress } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { emailRegEx } from '../../utils/constants'
import { useStyles } from './styles'

export default function LogIn ({ loading, onSubmit }) {
  const classes = useStyles()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Typography component='h1' variant='h1'>
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name='email'
              control={control}
              defaultValue={''}
              rules={{ required: true, pattern: emailRegEx }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='email'
                  label='Email Address'
                  error={Boolean(errors?.email)}
                  helperText={errors?.email && 'Enter Valid Email'}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  error={Boolean(errors?.password)}
                  helperText={errors?.password && 'Password is required'}
                />
              )}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              {loading ? <CircularProgress style={{ color: '#fff', height: '20px', width: '20px' }} /> : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

LogIn.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func
}
