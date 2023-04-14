import { Header } from '../templates/Header/Header';
import { Grid } from '@mui/material';
import { HeroSection } from '../components/HeroSection/HeroSection';
import heroImage from '../assets/offer-hero.png';
import { HeroSectionProps } from '../components/HeroSection/HeroSection.types';
import { Footer } from '../templates/Footer/Footer';
import { OfferContent } from '../templates/OfferContent/OfferContent';

export function OfferPage() {
  const heroSectionProps: HeroSectionProps = {
    image: heroImage,
    imageHeight: 400,
    title: 'Submit your offer. Our team is ready to review your offer - submit it now and take the first step towards fulfilling your request.',
    searchBar: false,
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
      <Header />
      <HeroSection {...heroSectionProps} />
      <OfferContent />
      <Footer />
    </Grid>
  );
}
