import { Header } from './templates/Header/Header';
import { Grid } from '@mui/material';
import { HeroSection } from './components/HeroSection/HeroSection';
export function App() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'flex-end'}
      height={'100vh'}
    >
      <Header />
      <HeroSection />
    </Grid>
  );
}
