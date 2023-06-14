import { Grid } from '@mui/material';
import { OfferBidCreationForm } from '../OfferBidCreationForm/OfferBidCreationForm';
import { OfferBidList } from '../OfferBidList/OfferBidList';
import { OfferHeader } from '../OfferHeader/OfferHeader';
import { OfferInfo } from '../OfferInfo/OfferInfo';

export function OfferContent() {
  return (
    <Grid>
      <OfferHeader></OfferHeader>
      <OfferInfo></OfferInfo>
      <OfferBidList></OfferBidList>
      <OfferBidCreationForm></OfferBidCreationForm>
    </Grid>
  );
}
