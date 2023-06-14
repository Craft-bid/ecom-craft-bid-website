import { Card, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';
import { FilterParams, FilterParamsProps } from '../OfferListContent/FilterParams.types';
import axios from 'axios';

export function OfferCollection({ filter, handleFilterChange }: FilterParamsProps) {
  const fetchUrl = 'http://localhost:8080/api/v1/public/listings/search';
  type Pageable = {
    pageNumber: number;
    pageSize: number;
  };
  type QueryParams = Record<string, string | string[] | number | number[] | boolean | boolean[] | Pageable>;
  const addQueryParams = (url: string, params: QueryParams): string => {
    const urlParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') {
        if (typeof value === 'object' && !Array.isArray(value)) {
          for (const [subKey, subValue] of Object.entries(value)) {
            if (subValue !== undefined && subValue.toString() !== '') {
              urlParams.append(subKey, subValue.toString());
            }
          }
        } else {
          urlParams.append(key, value.toString());
        }
      }
    }

    return `${url}?${urlParams.toString()}`;
  };

  const [offerCardProps, setOfferCardProps] = useState<OfferCardProps[]>([]);
  const getListing = async (params: FilterParams) => {
    const toBackend: QueryParams = {
      title: params.title,
      tagNames: params.tags,
    };
    console.log(toBackend);
    await axios
      .get(addQueryParams(fetchUrl, toBackend))
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data: []) => {
        const newData: OfferCardProps[] = data.map((offer: any) => {
          return {
            title: offer.title as string,
            description: offer.description as string,
            avgBid: 100,
            bids: offer.bids.length as number,
            image: (offer.photo[0] as string) || 'https://source.unsplash.com/random',
          };
        });

        setOfferCardProps(newData);
      })
      .catch((error) => {
        throw error;
      });
  };
  useEffect(() => {
    console.log(filter);
    void getListing(filter);
  }, [filter]);

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
