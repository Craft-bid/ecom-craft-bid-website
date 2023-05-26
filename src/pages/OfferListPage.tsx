import { Box, Dialog, Grid, Typography } from '@mui/material';
import { usePopup } from '../common/hooks/usePopup';
import { FormProps } from '../common/types/FormProps.types';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Popup } from '../components/Popup/Popup';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Footer } from '../templates/Footer/Footer';
import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
import { OfferListContent } from '../templates/OfferListContent/OfferListContent';
import { useIsAuthenticated } from '../common/hooks/useIsAuthenticated';
import { useState } from 'react';

export function OfferListPage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();
  const { isAuthenticated, setAuthenticated } = useIsAuthenticated();
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [statusModalMessage, setStatusModalMessage] = useState('');

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
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
    isAuthenticated: isAuthenticated,
    setAuthenticated: setAuthenticated,
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
