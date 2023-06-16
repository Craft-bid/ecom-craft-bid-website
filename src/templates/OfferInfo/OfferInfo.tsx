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
        marginTop={4}
        marginBottom={4}
      >
        {/* Header + Job description*/}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
          marginRight={isTabletOrMobile ? 0 : '5%'}
        >
          <Typography sx={{ fontFamily: 'Libre Baskerville', fontWeight: 'Regular', fontSize: '24px', letterSpacing: '0.15px' }}>
            Job description:
          </Typography>
          <Typography
            marginTop={1}
            marginBottom={1}
            sx={{ fontFamily: 'Montserrat', fontWeight: 'Regular', fontSize: '24px', letterSpacing: '0.15px' }}
          >
            {offerDescription}
          </Typography>
        </Grid>
        {/* Image */}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '45%'}
        >
          <img
            src={offerImageUrls[0]}
            alt='offer'
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        marginTop={4}
        marginBottom={4}
      >
        {/* Categories */}
        <Grid
          item
          width={isTabletOrMobile ? '100%' : '50%'}
          display={'flex'}
          flexDirection={'row'}
          marginRight={isTabletOrMobile ? 0 : '5%'}
        >
          <Typography
            fontFamily={'Montserrat'}
            fontSize={'24px'}
            fontWeight={500}
            sx={{ letterSpacing: '0.15px' }}
            marginRight={1}
          >
            {' '}
            Categories:{' '}
          </Typography>
          <Typography
            fontFamily={'Montserrat'}
            fontSize={'24px'}
            fontWeight={300}
            sx={{ letterSpacing: '0.15px' }}
          >
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
          width={isTabletOrMobile ? '100%' : '45%'}
          display={'flex'}
          flexDirection={'row'}
        >
          <Grid
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography
              fontFamily={'Montserrat'}
              fontSize={'24px'}
              fontWeight={500}
              sx={{ letterSpacing: '0.15px' }}
              marginRight={1}
            >
              About the client:
            </Typography>
          </Grid>

          <Grid
            display={'flex'}
            flexDirection={'column'}
            gap={4}
            paddingLeft={4}
          >
            <Typography
              fontFamily={'Montserrat'}
              fontSize={'24px'}
              fontWeight={400}
              sx={{ letterSpacing: '0.15px' }}
            >
              {offerOwnerName} {offerOwnerSurname}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={'16px'}
              fontWeight={400}
              sx={{ letterSpacing: '0.15px' }}
            >
              {offerOwnerStatus}
            </Typography>
            <Rating
              value={Number(offerOwnerRating)}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}
