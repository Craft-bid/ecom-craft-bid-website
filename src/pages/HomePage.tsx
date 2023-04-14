import { Header } from '../templates/Header/Header';
import { Grid } from '@mui/material';
import { HeroSection } from '../components/HeroSection/HeroSection';
import heroImage from '../assets/main-hero.png';
import { HeroSectionProps } from '../components/HeroSection/HeroSection.types';
import { Footer } from '../templates/Footer/Footer';
import { HomePageContent } from '../templates/HomePageContent/HomePageContent';
import { LoginForm } from '../components/LoginForm/LoginForm';

export function HomePage() {
  const heroSectionProps: HeroSectionProps = {
    image: heroImage,
    imageHeight: 400,
    title: 'Find the best suited offer for your skills',
    hasSearchBar: true,
    isMiddleVariant: false,
  };

  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      height={'100vh'}
      sx={homePageSxObj}
    >
      <LoginForm />
    </Grid>
  );
}
