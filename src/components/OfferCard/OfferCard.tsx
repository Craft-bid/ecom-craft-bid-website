import { Box, Grid, Typography } from '@mui/material';
import { OfferCardProps } from './OfferCard.types';
import '@fontsource/montserrat';

export function OfferCard(prop: OfferCardProps) {
  return (
    <Box
      borderBottom={1}
      borderColor='black'
      borderTop={1}
      width={1000}
      height={280}
      margin='auto'
      marginTop={5}
      paddingBottom={4}
      paddingTop={4}
    >
      <Grid
        container
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        height={1}
        flexWrap={'nowrap'}
        columnSpacing={4}
      >
        <Grid
          item
          height={1}
          mobile={4}
        >
          <Box
            width={1}
            height={1}
            bgcolor={'red'}
          >
            <img
              src={prop.image}
              alt='offer'
              width={'100%'}
              height={'100%'}
            />
          </Box>
        </Grid>
        <Grid
          item
          mobile={5}
          height={1}
          container
          flexDirection={'column'}
          justifyContent={'space-between'}
          flexWrap={'nowrap'}
        >
          <Grid
            item
            mobile={12}
            maxHeight={45}
          >
            <Typography
              fontFamily='Montserrat'
              fontWeight={'bold'}
              fontSize={24}
            >
              {prop.title}
            </Typography>
          </Grid>
          <Grid
            item
            mobile={12}
            height={5}
          >
            <Typography
              fontFamily='Montserrat'
              fontSize={20}
              lineHeight={'24px'}
            >
              {prop.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          mobile={3}
          borderLeft={1}
          height={1}
          borderColor='divider'
          flexDirection={'column'}
          alignItems={'left'}
          paddingLeft={3}
        >
          <Typography
            fontFamily='Montserrat'
            fontSize={20}
            fontWeight={'bold'}
            lineHeight={'24px'}
          >
            Avg. Bid: {prop.avgBid}$
          </Typography>
          <Typography
            fontFamily='Montserrat'
            fontSize={16}
            fontWeight={'500'}
            lineHeight={'24px'}
          >
            {prop.bids} bids
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}