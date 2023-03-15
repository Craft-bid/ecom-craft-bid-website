import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '@fontsource/roboto';

export function Header() {
  return (
    <Box maxHeight={100}>
      <AppBar>
        <Toolbar>
          <Box
            flexGrow={1}
            display='flex'
          >
            <IconButton
              size='small'
              edge='start'
            >
              <Logo
                height={100}
                width={400}
                fill='white'
              />
            </IconButton>
          </Box>
          <Button
            variant='text'
            color='inherit'
          >
            CONTACT US
          </Button>
          <Button
            variant='text'
            color='inherit'
            sx={{
              marginLeft: 10,
            }}
          >
            ENGLISH
          </Button>
          <Button
            sx={{
              marginLeft: 10,
              height: 40,
              width: 100,
            }}
            variant='outlined'
            color='inherit'
          >
            SIGN IN
          </Button>
          <Button
            sx={{
              marginLeft: 10,
              marginRight: 10,
              height: 40,
              width: 100,
            }}
            variant='outlined'
            color='inherit'
          >
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
