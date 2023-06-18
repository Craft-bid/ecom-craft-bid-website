import { Grid, Typography } from '@mui/material';
import ContactUs from './ContactUs.pdf';
import PrivacyPolicy from './PrivacyPolicy.pdf';
import AboutCraft from './AboutCraft.pdf';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={160}
      bgcolor={'#17252A'}
      columnGap={8}
    >
      <Typography color={'white'}>Our links:</Typography>
      <Link
        to={AboutCraft}
        target='_blank'
      >
        <Typography color={'white'}>About us</Typography>
      </Link>
      <Link
        to={PrivacyPolicy}
        target='_blank'
      >
        <Typography color={'white'}>Privacy policy:</Typography>
      </Link>
      <Link
        to={ContactUs}
        target='_blank'
      >
        <Typography color={'white'}>Contact</Typography>
      </Link>
    </Grid>
  );
}
