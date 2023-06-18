import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, Formik, Field, FormikErrors } from 'formik';
import { updateOffer } from '../../services/offerService';
import { UpdateOfferDTO } from '../../common/types/DTOs.types';

export function OfferControlForm(props: { listingid: number }) {
  const handleSubmit = async (values: { title: string; description: string; ended: boolean }) => {
    const update: UpdateOfferDTO = {
      title: values.title,
      description: values.description,
      ended: values.ended,
    };
    await updateOffer(props.listingid, update).then(() => {
      window.location.reload();
    });
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
          {({ errors }) => {
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
                    <Field
                      type='checkbox'
                      name='ended'
                      as={FormControlLabel}
                      control={<Checkbox />}
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
