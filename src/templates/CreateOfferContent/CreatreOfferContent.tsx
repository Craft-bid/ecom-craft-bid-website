import { Grid } from '@mui/material';
import { SubmitOfferForm } from '../../components/SubmitOfferForm/SubmitOfferForm';

export function CreateOfferContent() {
  const pageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  return (
    <Grid
      container
      height={'auto'}
      sx={pageSxObj}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      paddingTop={15}
      paddingBottom={15}
    >
      <SubmitOfferForm />
    </Grid>
  );
}
