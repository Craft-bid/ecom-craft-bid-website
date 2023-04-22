import { Box, Button, Grid, TextField, Typography, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import '@fontsource/roboto';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { RegisterFormErrors, RegisterFormValues } from './RegisterForm.types';
import { Link } from 'react-router-dom';

export function RegisterForm() {
  const theme = useTheme();
  const validate = (values: RegisterFormValues) => {
    const errors: RegisterFormErrors = {};
    const requiredFields = Object.keys(values) as (keyof RegisterFormValues)[];
    requiredFields
      .filter((field) => {
        return !values[field];
      })
      .forEach((field) => {
        errors[field] = `Field ${field} is required`;
      });
    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = 'Passwords must match';
    }
    return errors;
  };
  return (
      <Formik
        enableReinitialize
        validateOnMount={true}
        validateOnChange={true}
        validateOnBlur={true}
        validate={validate}
        initialValues={{ login: '', email: '', password: '', repeatPassword: '' }}
        onSubmit={function () {
          throw new Error('Function not implemented.');
        }}
      >
        {({ isValid, submitForm }) => {
          return (
              <Box
                padding={0}
                boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                width={300}
                borderRadius='10px'
                bgcolor={theme.palette.primary.light}
                height={600}
              >
                <Grid
                  container
                  alignItems='center'
                  justifyContent='center'
                  paddingTop={2}
                  spacing={3}
                >
                  <Grid
                    item
                    mobile={11}
                  >
                    <Typography
                      align='center'
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: 14,
                        lineHeight: '36px',
                        letterSpacing: '1.25px',
                      }}
                    >
                      REGISTER
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    mobile={11}
                  >
                    <Field
                      as={TextField}
                      label='Login'
                      sx={{
                        width: 1,
                        backgroundColor: 'white',
                      }}
                      type='login'
                      name='login'
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={11}
                  >
                    <Field
                      as={TextField}
                      label='E-mail'
                      sx={{
                        width: 1,
                        backgroundColor: 'white',
                      }}
                      type='email'
                      name='email'
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={11}
                  >
                    <PasswordInput
                      name='password'
                      label='Password'
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={11}
                  >
                    <PasswordInput
                      name='repeatPassword'
                      label='Repeat password'
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={11}
                  >
                    <Typography
                      align='center'
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: '24px',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Already have an account? <Link to='/login'> Login</Link>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    marginTop={2}
                    mobile={8}
                  >
                    <Button
                      variant='contained'
                      color='secondary'
                      sx={{
                        padding: 1,
                        width: 1,
                      }}
                      onClick={submitForm}
                      disabled={!isValid}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Box>
          );
        }}
      </Formik>
  );
}
