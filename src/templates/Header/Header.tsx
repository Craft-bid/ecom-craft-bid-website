/* eslint-disable @typescript-eslint/no-magic-numbers */
import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '@fontsource/roboto';
import { HeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthenticationContext } from '../../components/AuthenticationContext/AuthenticationContext';
import { useTranslation } from 'react-i18next';

export function Header(props: HeaderProps) {
  const { t, i18n } = useTranslation();
  const { onSignInClick, onSignUpClick } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error('AuthenticationContext is null');
  }

  const { isAuthenticated, name, id } = context;

  const onSignOutClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const onLogoClick = () => {
    navigate('/');
  };

  const onUserClick = () => {
    if (!id) {
      throw new Error('User ID is null');
    }
    navigate(`/user/${id}`);
  };
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent={isMobile ? 'space-between' : 'flex-start'}
          alignItems='center'
          flexWrap='nowrap'
          spacing={isMobile ? 0 : 1}
        >
          <Grid
            item
            mobile={6}
            desktop={8}
            textAlign='left'
          >
            <IconButton
              size='small'
              edge='start'
              onClick={onLogoClick}
            >
              <Logo
                height={100}
                width={isMobile ? 250 : 400}
                fill='white'
              />
            </IconButton>
          </Grid>
          {!isMobile && (
            <>
              <Grid
                item
                minWidth={100}
                mobile={1}
              >
                <Button
                  sx={{
                    minWidth: 100,
                  }}
                  variant='text'
                  color='inherit'
                  onClick={() => {
                    const currentLanguage = i18n.language;
                    const targetLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
                    localStorage.setItem('lng', targetLanguage);
                    void i18n.changeLanguage(targetLanguage);
                  }}
                >
                  {t('header.switchLanguage')}
                </Button>
              </Grid>
              <Grid
                item
                minWidth={100}
                maxWidth={100}
                marginLeft={2}
                mobile={1}
              >
                <Button
                  sx={{
                    height: 40,
                    width: 1,
                    maxWidth: 100,
                    minWidth: 100,
                  }}
                  variant='outlined'
                  color='inherit'
                  onClick={isAuthenticated ? onUserClick : onSignUpClick}
                >
                  {isAuthenticated ? name?.substring(0, 4).concat('...') : t('header.signUp')}
                </Button>
              </Grid>
            </>
          )}
          <Grid
            mobile={1}
            item
            minWidth={100}
            marginLeft={2}
            marginRight={isMobile ? 2 : 10}
          >
            <Button
              sx={{
                height: 40,
                maxWidth: 100,
                width: 1,
                minWidth: 100,
              }}
              variant='outlined'
              color='inherit'
              onClick={isAuthenticated ? onSignOutClick : onSignInClick}
            >
              {isAuthenticated ? t('header.signOut') : t('header.signIn')}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
