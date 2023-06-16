import { Grid } from '@mui/material';
import { FilterContainer } from '../../components/FilterContainer/FilterContainer';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { OfferCollection } from '../OfferCollection/OfferCollection';

export function OfferListPageContent() {
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
      <Grid
        paddingTop={10}
        paddingBottom={20}
        width={'80%'}
        container
      >
        <SearchBar></SearchBar>

        <Grid
          item
          container
          flexDirection={'row'}
          justifyContent={'space-between'}
          paddingTop={10}
        >
          <FilterContainer></FilterContainer>

          <OfferCollection></OfferCollection>
        </Grid>
      </Grid>
    </Grid>
  );
}
