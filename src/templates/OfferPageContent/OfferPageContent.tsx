import { Card, Grid } from '@mui/material';
import { useEffect } from 'react';
import { OfferBidCreationForm } from '../OfferBidCreationForm/OfferBidCreationForm';
import { OfferBidList } from '../OfferBidList/OfferBidList';
import { OfferHeader } from '../OfferHeader/OfferHeader';
import { OfferInfo } from '../OfferInfo/OfferInfo';

export function OfferPageContent() {
  //Get offer status, offer title, offer description, get category
  //Also get seller name and surname, his id(needs to link to his profile), all ratings of the seller, seller picture, seller status(verified, not verified))
  //Also get all bidders, their names, surnames, ratings, pictures, status(verified, not verified), their bids
  useEffect(() => {}, []);
  
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
      <Card
        sx={{
          width: '75%',
          height: '100%',
          minHeight: '500px',
          bgcolor: '#F5FBFB',
          padding: 3,
          flexDirection: 'column',
          flexWrap: 'nowrap',
          spacing: 2,
          marginTop: 4,
          marginBottom: 10,
        }}
      >
        <OfferHeader></OfferHeader>
        <OfferInfo></OfferInfo>
        <OfferBidList></OfferBidList>
        <OfferBidCreationForm></OfferBidCreationForm>
      </Card>
    </Grid>
  );
}
