import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export function HomePageContent() {
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
  };

  const headingSxObj = {
    fontSize: '4rem',
    fontFamily: 'Lato',
    fontWeight: 200,
  };

  const subHeadingSxObj = {
    fontSize: '2.5rem',
    fontFamily: 'Lato',
    fontWeight: 400,
  };

  const cardContentSxObj = {
    fontSize: '1.5rem',
    fontFamily: 'Montserrat',
    fontWeight: 500,
  };

  return (
    <Grid
      container
      height={'100vh'}
      width={'100vw'}
      sx={homePageSxObj}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Typography sx={headingSxObj}>Looking to use the skills you have?</Typography>
      <Grid
        item
        container
        justifyContent={'center'}
        alignItems={'center'}
        gap={15}
      >
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}>Browse offers</Typography>

            <Typography sx={cardContentSxObj}>
              It is very simple to find an interesting offer. Type in the keywords, and you will see a diverse array of jobs.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}> Get paid safely </Typography>
            <Typography sx={cardContentSxObj}>
              We have a dedicated support team and a payment system that ensures you receive your pay safely.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}> No cost to join </Typography>
            <Typography sx={cardContentSxObj}>
              Our website is free. It costs nothing to register, take a bid, and fulfill the client’s commission.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Typography sx={headingSxObj}>Check out our available categories.</Typography>
      <Grid
        item
        justifyContent={'center'}
        alignItems={'center'}
      ></Grid>
    </Grid>
  );
}
