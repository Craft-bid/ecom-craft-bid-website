import { Grid } from '@mui/material';

export function HomePageContent() {
  const homePageSxObj = {
    backgroundColor: '#F5FBFB',
  };
  return (
    <Grid
      paddingTop={100}
      paddingBottom={100}
      sx={homePageSxObj}
    >
      <Grid
        item
        mobile={12}
        tablet={12}
        desktop={12}
      ></Grid>

      <Grid
        item
        mobile={12}
        tablet={12}
        desktop={12}
      ></Grid>
    </Grid>
  );
}
