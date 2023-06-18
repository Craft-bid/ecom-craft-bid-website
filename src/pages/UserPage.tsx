import { Box, Dialog, Grid, Typography } from '@mui/material';
import { usePopup } from '../common/hooks/usePopup';
import { FormProps } from '../common/types/FormProps.types';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Popup } from '../components/Popup/Popup';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Footer } from '../templates/Footer/Footer';
import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
import { UserContent } from '../templates/UserContent/UserContent';
import { UserDTO } from '../common/types/DTOs.types';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function UserPage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [statusModalMessage, setStatusModalMessage] = useState('');
  const [profilePageProps, setProfilePageProps] = useState<UserDTO>();

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
  };

  const getContent = async () => {
    const pathname = window.location.pathname;
    const rightPartIndex = 1;
    const urlId = Number(pathname.split('/user/')[rightPartIndex]); // Extract the ID from the URL
    if (isNaN(urlId)) {
      throw new Error('Invalid ID');
    }
    await axios
      .get<UserDTO>(`http://localhost:8080/api/v1/public/users/${urlId}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setProfilePageProps(data);
      })
      .catch((error) => {
        throw error;
      });
  };
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  useEffect(() => {
    void getContent();
  }, []);

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
      justifyContent={'space-between'}
      height={'auto'}
      minWidth={'100%'}
      flexDirection={'column'}
      flexWrap={'nowrap'}
      alignItems={'center'}
      sx={homePageSxObj}
    >
      <Header {...headerProps} />
      {profilePageProps && <UserContent {...profilePageProps} />}
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
