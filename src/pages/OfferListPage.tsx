import { Grid } from '@mui/material';
import { usePopup } from '../common/hooks/usePopup';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Popup } from '../components/Popup/Popup';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Footer } from '../templates/Footer/Footer';
import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
import { OfferListContent } from '../templates/OfferListContent/OfferListContent';

export function OfferListPage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();

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
      <OfferListContent />
      <Footer />
      {showPopup && renderPopup()}
    </Grid>
  );
}
