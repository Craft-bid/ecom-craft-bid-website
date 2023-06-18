/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Field, Form, FormikErrors } from 'formik';
import { addBid } from '../../services/offerService';
import { OfferBidProps } from './OfferBidCreationForm.types';
import { CreateBidDTO } from '../../common/types/DTOs.types';

export function OfferBidCreationForm({ ...props }: OfferBidProps) {
  const handleSubmit = (values: { description: string; money: string; days: string }) => {
    const newBid: CreateBidDTO = {
      description: values.description,
      price: Number(values.money),
      daysToDeliver: Number(values.days),
      listingId: String(props.listingId),
      bidderId: String(props.bidderId),
    };
    void addBid(newBid);
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
