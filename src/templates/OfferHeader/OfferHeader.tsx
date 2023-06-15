import { Grid } from '@mui/material';
import { OfferHeaderProps } from './OfferHeader.types';


export function OfferHeader(props: OfferHeaderProps) {
  return (
    <Grid
      justifyContent={'space-between'}
      alignItems={'center'}
    ></Grid>
  );
}
