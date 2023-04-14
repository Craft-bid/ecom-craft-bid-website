import { Card, Grid } from '@mui/material';

export function OfferContent() {
  const pageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  const cardSxObj = { backgroundColor: '#F5FBFB', width: '90%', minHeight: 1400, borderRadius: 10 };
  return (
    <Grid
      container
      height={'auto'}
      sx={pageSxObj}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      paddingTop={15}
      paddingBottom={15}
    >
      <Card sx={cardSxObj}></Card>
    </Grid>
  );
}
