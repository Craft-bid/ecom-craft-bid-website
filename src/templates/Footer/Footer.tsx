import { Grid, Typography } from '@mui/material';
import ContactUs from './ContactUs.pdf';
import PrivacyPolicy from './PrivacyPolicy.pdf';
import AboutCraft from './AboutCraft.pdf';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={160}
      bgcolor={'#17252A'}
      columnGap={8}
    >
      <Typography color={'white'}>{t('footer.description')}:</Typography>
      <Link
        to={AboutCraft}
        target='_blank'
      >
        <Typography color={'white'}>{t('footer.about')}</Typography>
      </Link>
      <Link
        to={PrivacyPolicy}
        target='_blank'
      >
        <Typography color={'white'}>{t('footer.privacy')}:</Typography>
      </Link>
      <Link
        to={ContactUs}
        target='_blank'
      >
        <Typography color={'white'}>{t('footer.contact')}</Typography>
      </Link>
    </Grid>
  );
}
