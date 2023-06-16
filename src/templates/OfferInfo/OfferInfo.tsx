import { Divider, Grid, Typography, useMediaQuery, useTheme, Rating } from '@mui/material';
import { OfferInfoProps } from './OfferInfo.types';

export function OfferInfo(props: OfferInfoProps) {
  const { offerDescription, offerImageUrls, offerOwnerName, offerOwnerRating, offerOwnerStatus, offerOwnerSurname, offerCategories } = props;
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  return (
    <Grid>
      <Grid
        container
        flexDirection={isTabletOrMobile ? 'column' : 'row'}
        justifyContent={'center'}
      >
        {/* Header + Job description*/}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
        >
          <Typography> Job description: </Typography>
          <Typography>{offerDescription}</Typography>
        </Grid>
        {/* Image */}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
        >
          <img
            src={offerImageUrls[0]}
            alt='offer'
            width={'100%'}
            height={'100%'}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        {/* Categories */}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
        >
          <Typography> Categories: </Typography>
          <Typography>
            {offerCategories
              .map((element) => {
                return element.name;
              })
              .join(', ')}
          </Typography>
        </Grid>
        {/* Owner info */}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
        >
          {' '}
          <Typography> About the client: </Typography>
          <Typography>
            {offerOwnerName} {offerOwnerSurname}
          </Typography>
          <Typography>{offerOwnerStatus}</Typography>
          <Rating
            name='read-only'
            value={offerOwnerRating}
          />
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}
