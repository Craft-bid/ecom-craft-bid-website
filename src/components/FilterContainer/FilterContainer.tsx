import { Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import '@fontsource/roboto';
import '@fontsource/montserrat';

export function FilterContainer() {
  const checkboxStyle = {
    color: 'rgba(0, 0, 0, 0.6)',
  };
  return (
    <Formik
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      initialValues={{
        min: '',
        max: '',
        fullTime: false,
        partTime: false,
        metalworking: false,
        CNCOperating: false,
        machining: false,
        polish: false,
        english: false,
        russian: false,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <form
            onChange={(event) => {
              handleSubmit(event);
            }}
          >
            <Card sx={{ width: 400, height: 850, backgroundColor: '#F5FBFB' }}>
              <Grid
                container
                justifyContent={'space-around'}
                alignContent={'left'}
                flexDirection={'column'}
                height={'100%'}
                flexWrap={'nowrap'}
                padding={2}
              >
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 36,
                    }}
                  >
                    Filter by:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Price:
                  </Typography>
                  <Grid
                    container
                    flexWrap={'nowrap'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Grid
                      item
                      mobile={3}
                    >
                      <Field
                        as={TextField}
                        label='min'
                        type='number'
                        name='min'
                      ></Field>
                    </Grid>
                    <Grid
                      item
                      mobile={1}
                    >
                      <Typography> To </Typography>
                    </Grid>
                    <Grid
                      item
                      mobile={3}
                    >
                      <Field
                        as={TextField}
                        label='max'
                        type='number'
                        name='max'
                      ></Field>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Type:
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Field
                          name='fullTime'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Full time'
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name='partTime'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Part time'
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Skill required:
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Field
                          name='metalworking'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Metalworking'
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name='CNCOperating'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='CNC Operating'
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name='machining'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Machining'
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Languages:
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Field
                          name='english'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='English'
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name='polish'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Polish'
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name='russian'
                          type='checkbox'
                          as={Checkbox}
                        />
                      }
                      style={checkboxStyle}
                      label='Russian'
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}
