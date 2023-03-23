import { Header } from '../templates/Header/Header';
import { Grid } from '@mui/material';
import { HeroSection } from '../components/HeroSection/HeroSection';
import heroImage from '../assets/main-hero.png';
import { HeroSectionProps } from '../components/HeroSection/HeroSection.types';
import { Footer } from '../templates/Footer/Footer';
export function HomePage() {
  const heroSectionProps: HeroSectionProps = {
    image: heroImage,
    imageHeight: 400,
    title: 'Find the best suited offer for your skills',
    searchBar: true,
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'flex-end'}
      height={'100vh'}
    >
      <Header />
      <HeroSection {...heroSectionProps} />
      <Footer />
    </Grid>
  );
}
