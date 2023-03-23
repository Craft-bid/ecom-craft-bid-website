import { AppBar, Button, Grid, IconButton, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '@fontsource/roboto';

export function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          flexWrap='nowrap'
          spacing={1}
        >
          <Grid
            item
            mobile={8}
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
            mobile={1}
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
            mobile={1}
          >
            <Button
              variant='text'
              color='inherit'
            >
              ENGLISH
            </Button>
          </Grid>
          <Grid
            item
            maxWidth={100}
            marginLeft={2}
            mobile={1}
          >
            <Button
              sx={{
                height: 40,
                width: 1,
                maxWidth: 100,
              }}
              variant='outlined'
              color='inherit'
            >
              SIGN IN
            </Button>
          </Grid>
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
