import { AppBar, Button, Grid, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '@fontsource/roboto';
import { HeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';

export function Header(props: HeaderProps) {
  const { onSignInClick, onSignUpClick, isAuthenticated, setAuthenticated } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const onSignOutClick = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
    window.location.reload();
  };

  const onLogoClick = () => {
    navigate('/');
  };

  const onUserClick = () => {
    navigate('/user');
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
          spacing={1}
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
                width={isMobile ? 300 : 400}
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
                >
                  ENGLISH
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
                  {isAuthenticated ? 'USER' : 'SIGN UP'}
                </Button>
              </Grid>
            </>
          )}
          <Grid
            mobile={1}
            item
            minWidth={100}
            marginLeft={2}
            marginRight={10}
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
              {isAuthenticated ? 'SIGN OUT' : 'SIGN IN'}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
