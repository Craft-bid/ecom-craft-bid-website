import { Header } from '../templates/Header/Header';
import { Grid } from '@mui/material';
import { HeroSection } from '../components/HeroSection/HeroSection';
import heroImage from '../assets/offer-hero.png';
import { HeroSectionProps } from '../components/HeroSection/HeroSection.types';
import { Footer } from '../templates/Footer/Footer';
import { OfferContent } from '../templates/OfferContent/OfferContent';
import { usePopup } from '../common/hooks/usePopup';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Popup } from '../components/Popup/Popup';
import { HeaderProps } from '../templates/Header/Header.types';

export function OfferPage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();

  const heroSectionProps: HeroSectionProps = {
    image: heroImage,
    imageHeight: 400,
    title: 'Submit your offer. Our team is ready to review your offer - submit it now and take the first step towards fulfilling your request.',
    hasSearchBar: false,
    isMiddleVariant: true,
  };

  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  function renderPopup() {
    if (isRegisterForm) {
      return (
        <Popup
          onClose={handleClosePopup}
          form={<RegisterForm />}
        />
      );
    } else {
      return (
        <Popup
          onClose={handleClosePopup}
          form={<LoginForm />}
        />
      );
    }
  }

  const headerProps: HeaderProps = {
    onSignUpClick: handleSignUpClick,
    onSignInClick: handleSignInClick,
  };

  return (
    <Grid
      container
      justifyContent={'center'}
      height={'100vh'}
      sx={homePageSxObj}
    >
      <Header {...headerProps} />
      <HeroSection {...heroSectionProps} />
      <OfferContent />
      <Footer />
      {showPopup && renderPopup()}
    </Grid>
  );
}
