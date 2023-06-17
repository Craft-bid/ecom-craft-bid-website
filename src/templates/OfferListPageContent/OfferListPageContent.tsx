import { Grid } from '@mui/material';
import { FilterContainer } from '../../components/FilterContainer/FilterContainer';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { OfferCollection } from '../OfferCollection/OfferCollection';
import { FilterParamsProps } from './FilterParams.types';
import { SearchBarProps } from '../../components/SearchBar/SearchBar.types';

export function OfferListPageContent({ ...props }: FilterParamsProps) {
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  const { filter, handleFilterChange } = props;
  const handleSearch = (searchText: string) => {
    const newFilter = { ...filter, title: searchText };
    handleFilterChange(newFilter);
  };
  const searchBarProps: SearchBarProps = {
    handleSearch,
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

          <OfferCollection {...props}></OfferCollection>
        </Grid>
      </Grid>
    </Grid>
  );
}
