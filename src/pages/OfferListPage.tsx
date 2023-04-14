import { Grid } from '@mui/material';
import { Footer } from '../templates/Footer/Footer';
import { Header } from '../templates/Header/Header';
import { OfferListContent } from '../templates/OfferListContent/OfferListContent';

export function OfferListPage() {
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      height={'100vh'}
      sx={homePageSxObj}
    >
      <Header />
      <OfferListContent />
      <Footer />
    </Grid>
  );
}
