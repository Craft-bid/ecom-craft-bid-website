import { AppBar, Box, Button, Grid, IconButton, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '@fontsource/roboto';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          flexWrap='nowrap'
        >
          <Grid
            item
            xs={8}
            textAlign='left'
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
          </Grid>
          <Grid
            item
            minWidth={50}
            xs={1}
            justifyItems={'flex-end'}
          >
            <Button
              variant='text'
              color='inherit'
            >
              CONTACT US
            </Button>
          </Grid>
          <Grid
            item
            minWidth={50}
            xs={1}
          >
            <Button
              variant='text'
              color='inherit'
              sx={{
                marginLeft: 10,
              }}
            >
              ENGLISH
            </Button>
          </Grid>
          <Grid
            item
            minWidth={100}
            marginLeft={2}
            xs={1}
          >
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
          </Grid>
          <Grid
            xs={1}
            item
            minWidth={100}
            marginLeft={2}
            marginRight={10}
          >
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
