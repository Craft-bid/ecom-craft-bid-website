import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Field, Form, FormikErrors } from 'formik';
export function OfferBidCreationForm() {
  const handleSubmit = (values) => {
    const listingId = 'your_listing_id'; // Replace with the actual listing ID
    const url = `http://localhost:8080/api/v1/public/${listingId}/bids`;

    // Perform your POST request using the values
    // For brevity, I'll just log the values to the console
    console.log(values);
  };

  const validate = (
    values: FormikErrors<{
      description: string;
      money: string;
      days: string;
    }>
  ) => {
    const errors: FormikErrors<{
      description: string;
      money: string;
      days: string;
    }> = {};

    if (!values.description) {
      errors.description = 'Description is required';
    }

    if (!values.money) {
      errors.money = 'Money field is required';
    }

    if (!values.days) {
      errors.days = 'Days to do task field is required';
    }

    return errors;
  };

  return (
    <Accordion sx={{ marginTop: 4 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography fontSize={32}>Make a bid</Typography>
      </AccordionSummary>
      {/*Create form with a */}
      <AccordionDetails>
        <Formik
          initialValues={{ description: '', money: '', days: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ values, errors }) => {
            return (
              <Form>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                  >
                    <Field
                      as={TextField}
                      name='description'
                      label='Description'
                      fullWidth
                      required
                      error={!!errors.description}
                      helperText={errors.description}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                  >
                    <Field
                      as={TextField}
                      type='number'
                      name='money'
                      label='Money'
                      fullWidth
                      required
                      error={!!errors.money}
                      helperText={errors.money}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                  >
                    <Field
                      as={TextField}
                      type='number'
                      name='days'
                      label='Days to do task'
                      fullWidth
                      required
                      error={!!errors.days}
                      helperText={errors.days}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                  >
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                  >
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}
