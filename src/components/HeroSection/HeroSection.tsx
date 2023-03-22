import { Grid, Typography } from '@mui/material';
import { SearchBar } from '../SearchBar/SearchBar';
import heroImage from '../../assets/main-hero.png';

export function HeroSection() {
  const sxObj = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    minHeight: 'auto',
    maxHeight: 'auto',
  };

  return (
    <Grid
      sx={sxObj}
      className='hero-container'
      mobile={12}
      tablet={12}
      desktop={12}
    >
      <Grid width={'30%'}>
        <Typography>Find the best suited offer for your skills</Typography>
        <SearchBar></SearchBar>
      </Grid>

      <Grid width={'70%'} />
    </Grid>
  );
}
