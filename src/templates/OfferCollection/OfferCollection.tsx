import { Card, Grid, Typography } from '@mui/material';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import { OfferCollectionProps } from './OfferCollection.types';

export function OfferCollection(props: OfferCollectionProps) {
  const { offerCardProps, bgColor, title, isCardVariant } = props;

  if (isCardVariant) {
    return (
      <Card sx={{ width: 1080, height: 'auto', backgroundColor: bgColor, paddingBottom: 8 }}>
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
            {title}
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
  } else {
    return (
      <Grid
        container
        spacing={2}
        sx={{ width: 1080, paddingBottom: 8 }}
      >
        <Grid
          item
          mobile={12}
        >
          <Typography
            variant='h4'
            sx={{ fontFamily: 'Montserrat', fontSize: 48 }}
          >
            {title}
          </Typography>
        </Grid>
        {offerCardProps.map((offerCardProp, index) => {
          return (
            <Grid
              item
              mobile={12}
              tablet={6}
              key={index}
            >
              <OfferCard {...offerCardProp} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
