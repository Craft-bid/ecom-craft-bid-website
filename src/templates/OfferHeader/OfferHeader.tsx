import { Divider, Grid, Typography } from '@mui/material';
import { OfferHeaderProps } from './OfferHeader.types';

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
              fontFamily: 'Baskerville',
              fontWeight: 'Regular',
              fontSize: '24px',
              letterSpacing: '0.15px',
            }}
          >
            {offerTitle}
          </Typography>
        </Grid>
        <Grid item>
          {offerStatus === 'Open' ? (
            <div style={{ backgroundColor: 'green', width: '10px', height: '10px', borderRadius: '50%' }} />
          ) : (
            <div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%' }} />
          )}
          <Typography
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'Regular',
              fontSize: '24px',
              letterSpacing: '0.15px',
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
            {bidLowestPrice} - {bidHighestPrice}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}
