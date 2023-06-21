/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Field, Form, FormikErrors } from 'formik';
import { addBid } from '../../services/offerService';
import { OfferBidProps } from './OfferBidCreationForm.types';
import { CreateBidDTO } from '../../common/types/DTOs.types';
import { useTranslation } from 'react-i18next';

export function OfferBidCreationForm({ ...props }: OfferBidProps) {
  const { t } = useTranslation();
  const handleSubmit = (values: { description: string; money: string; days: string }) => {
    const newBid: CreateBidDTO = {
      description: values.description,
      price: Number(values.money),
      daysToDeliver: Number(values.days),
      listingId: String(props.listingId),
      bidderId: String(props.bidderId),
    };
    addBid(newBid)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
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
      errors.description = String(t('offerPage.descriptionError'));
    }

    if (!values.money) {
      errors.money = String(t('offerPage.moneyError'));
    }

    if (!values.days) {
      errors.days = String(t('offerPage.daysError'));
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
        <Typography fontSize={32}>{t('offerPage.bidTitle')}</Typography>
      </AccordionSummary>
      {/*Create form with a */}
      <AccordionDetails>
        <Formik
          initialValues={{ description: '', money: '', days: '' }}
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
                      name='description'
                      label={t('offerPage.description')}
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
                      label={t('offerPage.money')}
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
                      label={t('offerPage.days')}
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
                      {t('offerPage.submit')}
                    </Button>
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                  ></Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}
