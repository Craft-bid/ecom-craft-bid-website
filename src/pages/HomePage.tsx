import { Header } from '../templates/Header/Header';
import { Box, Dialog, Grid, Typography } from '@mui/material';
import { HeroSection } from '../components/HeroSection/HeroSection';
import heroImage from '../assets/main-hero.png';
import { HeroSectionProps } from '../components/HeroSection/HeroSection.types';
import { Footer } from '../templates/Footer/Footer';
import { HomePageContent } from '../templates/HomePageContent/HomePageContent';
import { usePopup } from '../common/hooks/usePopup';
import { Popup } from '../components/Popup/Popup';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { HeaderProps } from '../templates/Header/Header.types';
import { FormProps } from '../common/types/FormProps.types';
import { useState } from 'react';

export function HomePage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [statusModalMessage, setStatusModalMessage] = useState('');

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
  };

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

  function renderPopup() {
    const formProps: FormProps = {
      onClose: handleClosePopup,
      setOpenStatusModal: setOpenStatusModal,
      setStatusModalMessage: setStatusModalMessage,
    };
    if (isRegisterForm) {
      return <Popup form={<RegisterForm {...formProps} />} />;
    } else {
      return <Popup form={<LoginForm {...formProps} />} />;
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
      <HomePageContent />
      <Footer />
      {showPopup && renderPopup()}
      <Dialog
        open={openStatusModal}
        onClose={handleCloseStatusModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography textAlign={'center'}> {statusModalMessage}</Typography>
        </Box>
      </Dialog>
    </Grid>
  );
}
