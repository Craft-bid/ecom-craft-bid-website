import { Box, Grid, Typography } from '@mui/material';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeroSectionProps } from './HeroSection.types';
export function HeroSection(props: HeroSectionProps) {
  const { image, imageHeight, title, searchBar } = props;
  const gridSxObj = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${imageHeight}px`,
    minHeight: `${imageHeight}px`,
    maxHeight: `${imageHeight}px`,
  };

  const textStyleObj = {
    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
    color: 'white',
    fontSize: '36px',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  };

  return (
    <Grid
      container
      sx={gridSxObj}
      mobile={12}
      tablet={12}
      desktop={12}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid
        item
        width={'50%'}
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
      >
        <Box
          width={480}
          paddingLeft={10}
          sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <Typography style={textStyleObj}>{title}</Typography>
          {searchBar && <SearchBar />}
        </Box>
      </Grid>

      <Grid
        item
        width={'50%'}
      />
    </Grid>
  );
}
