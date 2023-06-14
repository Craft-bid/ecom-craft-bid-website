import { Card, Grid } from '@mui/material';
import { OfferBidCreationForm } from '../OfferBidCreationForm/OfferBidCreationForm';
import { OfferBidList } from '../OfferBidList/OfferBidList';
import { OfferHeader } from '../OfferHeader/OfferHeader';
import { OfferInfo } from '../OfferInfo/OfferInfo';

export function OfferPageContent() {
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  return (
    <Grid
      container
      height={'auto'}
      sx={homePageSxObj}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Card sx={{ minWidth: 100, borderRadius: 10 }}>
        <OfferHeader></OfferHeader>
        <OfferInfo></OfferInfo>
        <OfferBidList></OfferBidList>
        <OfferBidCreationForm></OfferBidCreationForm>
      </Card>
    </Grid>
  );
}
