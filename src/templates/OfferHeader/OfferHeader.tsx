import { Divider, Grid, Typography } from '@mui/material';
import { OfferHeaderProps } from './OfferHeader.types';
import '@fontsource/libre-baskerville';

export function OfferHeader(props: OfferHeaderProps) {
  const { bidHighestPrice, bidLowestPrice, offerStatus, offerTitle } = props;

  return (
    <Grid>
      <Grid
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDirection={'row'}
        container
      >
        <Grid item>
          <Typography
            style={{
              fontFamily: 'Libre Baskerville',
              fontWeight: 'Regular',
              fontSize: '36px',
              letterSpacing: '0.15px',
              textTransform: 'uppercase',
            }}
          >
            {offerTitle}
          </Typography>
        </Grid>
        <Grid
          item
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'row'}
        >
          {offerStatus === 'Open' ? (
            <div style={{ backgroundColor: 'green', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px' }} />
          ) : (
            <div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px' }} />
          )}
          <Typography
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'Regular',
              fontSize: '24px',
              letterSpacing: '0.15px',
              textTransform: 'uppercase',
            }}
          >
            {offerStatus}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'Medium',
              fontSize: '36px',
              letterSpacing: '0.15px',
            }}
          >
            {bidLowestPrice}$ - {bidHighestPrice}$
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 2 }} />
    </Grid>
  );
}
