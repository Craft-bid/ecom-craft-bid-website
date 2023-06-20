import { Box, Button, Grid, TextField, Typography, useTheme } from '@mui/material';
import { Field, Formik, FormikHelpers } from 'formik';
import { LoginFormDTO, LoginFormErrors, LoginFormValues } from './LoginForm.types';
import '@fontsource/roboto';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { loginUser } from '../../services/authService';
import { FormProps } from '../../common/types/FormProps.types';
import { useTranslation } from 'react-i18next';

export function LoginForm(props: FormProps) {
  const { t } = useTranslation();
  const { setOpenStatusModal, setStatusModalMessage, onClose } = props;
  const theme = useTheme();
  const minLength = 1;

  const validate = (values: { email: string; password: string }) => {
    const errors: LoginFormErrors = {};
    if (values.email.length < minLength) {
      errors.email = "email can't be empty";
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
      initialValues={{ email: '', password: '' }}
      onSubmit={(values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
        const dto: LoginFormDTO = {
          email: values.email,
          password: values.password,
        };
        loginUser(dto)
          .then(() => {
            window.location.reload();
          })
          .catch(() => {
            //open a dialog menu with error
            setOpenStatusModal(true);
            setStatusModalMessage('Error. Please check your login and password.');
          })
          .finally(() => {
            setSubmitting(false);
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
                    {String(t('loginForm.header'))}
                  </Typography>
                </Grid>
                <Grid
                  item
                  mobile={11}
                >
                  <Field
                    as={TextField}
                    label={String(t('loginForm.email'))}
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
                    label={String(t('loginForm.button'))}
                  />
                </Grid>
                <Grid
                  item
                  container
                  gap={2}
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
                    {t('loginForm.button')}
                  </Button>

                  <Button
                    variant='contained'
                    color='info'
                    sx={{
                      padding: 1,
                      width: 1,
                    }}
                    onClick={onClose}
                  >
                    {t('loginForm.close')}
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
