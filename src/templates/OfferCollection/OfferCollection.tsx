import { Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';

export function OfferCollection() {
  const fetchUrl = '../src/templates/OfferCollection/testCollection.json';

  const [offerCardProps, setOfferCardProps] = useState<OfferCardProps[]>([]);
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data: []) => {
        return setOfferCardProps(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <Card sx={{ width: 1080, height: 'auto', backgroundColor: '#F5FBFB', paddingBottom: 8 }}>
      <Grid
        container
        width={'100%'}
        height={'auto'}
        paddingTop={3}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          fontFamily={'Montserrat'}
          fontSize={48}
        >
          {' '}
          Available offers{' '}
        </Typography>
      </Grid>
      {offerCardProps.map((offerCardProp, index) => {
        return (
          <OfferCard
            key={index}
            {...offerCardProp}
          ></OfferCard>
        );
      })}
    </Card>
  );
}
