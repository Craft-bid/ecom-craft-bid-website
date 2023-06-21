import { Card, Grid, Typography } from '@mui/material';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import { OfferCollectionProps } from './OfferCollection.types';
import { Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { FilterParams } from '../OfferListPageContent/FilterParams.types';

export function OfferCollection(props: OfferCollectionProps) {
  const { offerCardProps, bgColor, title, isCardVariant, pages, currentPage, setFilter } = props;
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setFilter((prev: FilterParams) => {
      return {
        ...prev,
        pageable: {
          ...prev.pageable,
          page: value,
        },
      };
    });
  };
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
        <Pagination
          page={currentPage}
          count={pages}
          onChange={handleChange}
        />
      </Card>
    );
  } else {
    return (
      <Grid
        display={'flex'}
        width={'100%'}
        height={'auto'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        marginBottom={4}
      >
        <Typography
          variant='h4'
          sx={{ fontFamily: 'Montserrat', fontSize: 48 }}
        >
          {title}
        </Typography>
        {offerCardProps.map((offerCardProp, index) => {
          return (
            <OfferCard
              key={index}
              {...offerCardProp}
            />
          );
        })}
      </Grid>
    );
  }
}
