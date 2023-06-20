import { Grid } from '@mui/material';
import { FilterContainer } from '../../components/FilterContainer/FilterContainer';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { OfferCollection } from '../OfferCollection/OfferCollection';
import { useEffect, useState } from 'react';
import { FilterParams, FilterParamsProps } from './FilterParams.types';
import { SearchBarProps } from '../../components/SearchBar/SearchBar.types';
import axios from 'axios';
import { OfferDTO } from '../../common/types/DTOs.types';
import { useNavigate } from 'react-router-dom';
import { QueryParams } from '../../common/types/Filter.types';
import { useTranslation } from 'react-i18next';

export function OfferListPageContent({ ...props }: FilterParamsProps) {
  const { t } = useTranslation();
  const { filter, handleFilterChange } = props;
  const navigate = useNavigate();
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  const fetchUrl = 'http://localhost:8080/api/v1/public/listings/search';

  const [offerCardProps, setOfferCardProps] = useState<OfferCardProps[]>([]);

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

  const getListing = async (params: FilterParams) => {
    const toBackend: QueryParams = {
      title: params.title,
      tagNames: params.tags,
      ...(params.minPrice !== 0 && { minPrice: params.minPrice }),
      ...(params.maxPrice !== 0 && { maxPrice: params.maxPrice }),
    };

    console.log('toback');
    console.log(toBackend);
    console.log(addQueryParams(fetchUrl, toBackend));
    await axios
      .get<OfferDTO[]>(addQueryParams(fetchUrl, toBackend))
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        const newData: OfferCardProps[] = data.map((offer: OfferDTO) => {
          return {
            id: offer.id,
            ownerId: offer.advertiserId,
            title: offer.title,
            description: offer.description,
            avgBid: offer.avgBid,
            bids: offer.bids.length,
            image: offer.photos[0] || 'https://source.unsplash.com/random',
          };
        });

        setOfferCardProps(newData);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchValue = queryParams.get('search') || '';

    filter.title = searchValue;
    console.log(filter);
    void getListing(filter);
  }, [filter]);

  const handleSearch = (searchText: string) => {
    navigate(`/offers?search=${searchText}`);
    //this function changes the url param on search submit
    const queryParams = new URLSearchParams(window.location.search);
    const searchValue = queryParams.get('search') || '';

    const newFilter = { ...filter, title: searchValue };
    handleFilterChange(newFilter);
  };
  const searchBarProps: SearchBarProps = {
    handleSearch,
  };

  const offerCollectionProps = { offerCardProps: offerCardProps, bgColor: '#F5FDFD', isCardVariant: true, title: t('offerListPage.offers') };
  return (
    <Grid
      container
      height={'auto'}
      sx={homePageSxObj}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Grid
        paddingTop={10}
        paddingBottom={20}
        width={'80%'}
        container
      >
        <SearchBar {...searchBarProps}></SearchBar>

        <Grid
          item
          container
          flexDirection={'row'}
          justifyContent={'space-between'}
          paddingTop={10}
        >
          <FilterContainer {...props}></FilterContainer>

          <OfferCollection {...offerCollectionProps}></OfferCollection>
        </Grid>
      </Grid>
    </Grid>
  );
}
