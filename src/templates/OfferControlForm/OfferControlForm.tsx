import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, Formik, Field, FormikErrors } from 'formik';

type UpdateDataDto = {
  title: string;
  description: string;
  ended: boolean;
};

export function OfferControlForm() {
  const handleSubmit = async (values: UpdateDataDto) => {
    const listingId = 'your_listing_id'; // Replace with the actual listing ID
    const url = `http://localhost:8080/api/v1/private/listings/${listingId}`;

    const updateData = {
      title: values.title,
      description: values.description,
      ended: values.ended,
    };

    try {
      await axios.patch(url, updateData);
      console.log('Listing updated successfully');
    } catch (error) {
      console.error('Failed to update listing', error);
    }
  };

  const validate = (values: { title: string; description: string; ended: boolean }) => {
    const errors: FormikErrors<{
      title: string;
      description: string;
      ended: string;
    }> = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.description) {
      errors.description = 'Description is required';
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
        <Typography fontSize={32}>Update Listing</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Formik
          initialValues={{
            title: '',
            description: '',
            ended: false,
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue }) => {
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
                      name='title'
                      label='Title'
                      fullWidth
                      required
                      error={!!errors.title}
                      helperText={errors.title}
                    />
                  </Grid>
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
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.ended}
                          onChange={(event) => {
                            return setFieldValue('endedStatus', event.target.checked);
                          }}
                          name='endedStatus'
                        />
                      }
                      label='Ended Status'
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
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}
