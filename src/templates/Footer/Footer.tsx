import { Grid, Typography } from '@mui/material';

export function Footer() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={160}
      bgcolor={'#17252A'}
    >
      <Typography color={'white'}>Our links:</Typography>
      <Typography color={'white'}>About us</Typography>
      <Typography color={'white'}>Privacy policy:</Typography>
      <Typography color={'white'}>Contact</Typography>
    </Grid>
  );
}
