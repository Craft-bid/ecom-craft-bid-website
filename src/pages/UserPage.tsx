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
import { UserContentProps } from '../templates/UserContent/UserContent.types';
import { useState } from 'react';

const profilePageProps: UserContentProps = {
  image: 'https://picsum.photos/150/150',
  name: 'Jack',
  surname: 'Smith',
  country: 'USA',
  city: 'Detroid',
  verified: true,
  stars: '4.5',
  phoneNumber: '123 456 789',
  email: 'example@example.pl',
  skills: ['skill1', 'skill2', 'skill3'],
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper risus ac elementum sollicitudin. Nullam ac eros eu quam euismod congue. Praesent interdum quam in nisi euismod, a convallis ligula imperdiet. Phasellus dapibus sit amet massa nec tempor. Class aptent  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultrices molestie pellentesque. Nulla diam mauris, porta porta gravida non, ultrices in urna. Nulla nec nunc egestas enim sodales convallis eu vel justo.',
  joined: new Date(),
  workedIn: 5,
  customerSatisfaction: 95,
};

export function UserPage() {
  const { handleClosePopup, handleSignUpClick, handleSignInClick, isRegisterForm, showPopup } = usePopup();
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
  };

  return (
    <Grid
      container
      justifyContent={'space-between'}
      height={'100vh'}
      minWidth={'100%'}
      flexDirection={'column'}
      flexWrap={'nowrap'}
      alignItems={'center'}
      sx={homePageSxObj}
    >
      <Grid
        minWidth={'100%'}
        item
      >
        <Header {...headerProps} />
      </Grid>
      <Grid item>
        <UserContent {...profilePageProps} />
      </Grid>
      <Grid
        item
        minWidth={'100%'}
      >
        <Footer />
      </Grid>
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
