import { Grid } from '@mui/material';
import { FilterContainer } from '../../components/FilterContainer/FilterContainer';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { OfferCollection } from '../OfferCollection/OfferCollection';
import { useEffect, useState } from 'react';
import { FilterParamsProps } from './FilterParams.types';
import { SearchBarProps } from '../../components/SearchBar/SearchBar.types';

export function OfferListPageContent({ ...props }: FilterParamsProps) {
  const { filter, handleFilterChange } = props;
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

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

  const handleSearch = (searchText: string) => {
    const newFilter = { ...filter, title: searchText };
    handleFilterChange(newFilter);
  };
  const searchBarProps: SearchBarProps = {
    handleSearch,
  };

  const offerCollectionProps = { offerCardProps, filter };
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
