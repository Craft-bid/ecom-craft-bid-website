import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Field, Formik, FormikHelpers } from 'formik';
import { LoginFormDTO, LoginFormErrors, LoginFormValues } from './LoginForm.types';
import '@fontsource/roboto';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';

export function LoginForm() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const minLength = 1;
  const validate = (values: { login: string; password: string }) => {
    const errors: LoginFormErrors = {};
    if (values.login.length < minLength) {
      errors.login = "Login can't be empty";
    }
    if (values.password.length < minLength) {
      errors.password = "Password can't be empty";
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
      initialValues={{ login: '', password: '' }}
      onSubmit={(values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
        const dto: LoginFormDTO = {
          login: values.login,
          password: values.password,
        };
        loginUser(dto)
          .then(() => {
            setSubmitting(false);
          })
          .catch((res) => {
            console.log(res);
          });
      }}
    >
      {({ isValid, isSubmitting, handleSubmit }) => {
        return (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <Box
              padding={0}
              boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
              width={300}
              borderRadius='10px'
              bgcolor={theme.palette.primary.light}
              height={400}
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
                    SIGN IN
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
                  <PasswordInput
                    name='password'
                    label='Password'
                  />
                </Grid>
                {isTablet && (
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
                      Don’t have an account? <Link to='/register'>Register</Link>
                    </Typography>
                  </Grid>
                )}
                <Grid
                  item
                  mobile={8}
                >
                  <Button
                    variant='contained'
                    color='secondary'
                    type='submit'
                    sx={{
                      padding: 1,
                      width: 1,
                    }}
                    disabled={!isValid || isSubmitting}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
