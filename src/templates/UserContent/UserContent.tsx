import { Grid, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { UserContentProps } from './UserContent.types';
import '@fontsource/montserrat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import { OfferCollection } from '../OfferCollection/OfferCollection';
import React, { useContext } from 'react';
import { AuthenticationContext } from '../../components/AuthenticationContext/AuthenticationContext';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';

export function UserContent(props: UserContentProps) {
  const { aboutMe, averageRating, city, country, email, id, image, joined, listings, name, phoneNumber, stars, surname, verified, workedIn } = props;

  const offerCardProps: OfferCardProps[] = listings.map((listing) => {
    return {
      id: listing.id,
      title: listing.title,
      description: listing.description,
      bids: listing.bids.length,
      ownerId: listing.advertiserId,
      avgBid: listing.avgBid,
      image: listing.photos[0] || 'https://source.unsplash.com/random',
    };
  });
  const data = [
    {
      label: verified ? (
        <>
          <Icon
            component={VerifiedUserIcon}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          {'CRAFT-BID verified user'}{' '}
        </>
      ) : (
        'Not verified'
      ),
    },
    {
      label: (
        <>
          <Icon
            component={StarIcon}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          {stars}
          {'/5'}
        </>
      ),
    },
    {
      label: `Phone Number: ${phoneNumber}`,
    },
    {
      label: `Email: ${email}`,
    },
  ];
  const stats = [
    {
      label: `${name} has joined in ${joined.toLocaleString('default', { month: 'long' })},${joined.getFullYear()}`,
    },
    {
      label: `${name} has worked in ${workedIn} jobs`,
    },
    {
      label: `${name} has an average rating of ${averageRating}`,
    },
  ];

  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('AuthenticationContext is null');
  }
  const isOwner = id === context.id;

  return (
    <Grid
      maxWidth={1480}
      height={'100%'}
      minHeight={'500px'}
      container
      bgcolor='#FAFDFD'
      borderRadius={10}
      padding={2}
      flexDirection={'column'}
      flexWrap={'nowrap'}
      spacing={2}
    >
      <Grid
        mobile={12}
        item
        container
        maxHeight={'40%'}
        height={'100%'}
        flexDirection={'row'}
        flexWrap={'nowrap'}
      >
        <Grid
          item
          mobile={2}
        >
          <Box
            width={1}
            height={1}
            borderRadius={5}
            overflow={'hidden'}
          >
            <img
              src={image}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt='offer'
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          flexDirection={'column'}
          flexWrap={'nowrap'}
          marginLeft={4}
        >
          <Grid
            item
            mobile={12}
          >
            <Typography
              fontFamily={'Montserrat'}
              fontSize={34}
              fontStyle={'normal'}
              fontWeight={400}
            >
              {name} {surname}, {country}, {city}
            </Typography>
          </Grid>
          <Grid
            item
            container
            flexDirection={'row'}
            justifyContent={'space-between'}
            mobile={12}
          >
            {data.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                >
                  <Typography
                    noWrap
                    fontFamily={'Montserrat'}
                    fontSize={20}
                    fontStyle={'normal'}
                    fontWeight={400}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        mobile={12}
        container
      >
        <Typography
          fontFamily={'Montserrat'}
          fontSize={32}
          fontStyle={'normal'}
          fontWeight={400}
        >
          About me
        </Typography>
        <Typography
          fontFamily={'Montserrat'}
          fontSize={20}
          fontStyle={'normal'}
          fontWeight={400}
        >
          {aboutMe}
        </Typography>
      </Grid>
      <Grid
        item
        mobile={12}
        maxHeight={'25%'}
        container
      >
        <Grid item>
          <Typography
            fontFamily={'Montserrat'}
            fontSize={32}
            fontStyle={'normal'}
            fontWeight={400}
          >
            Statistics
          </Typography>
        </Grid>
        <Grid
          item
          container
          flexDirection={'row'}
          flexWrap={'nowrap'}
          justifyContent={'space-between'}
        >
          {stats.map((item, index) => {
            return (
              <Grid
                key={index}
                item
              >
                <Typography
                  fontFamily={'Montserrat'}
                  fontSize={20}
                  fontStyle={'normal'}
                  fontWeight={400}
                >
                  {item.label}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        {isOwner && (
          <OfferCollection
            offerCardProps={
              offerCardProps
                ? offerCardProps.filter((element) => {
                    return element.ownerId === context.id;
                  })
                : []
            }
            bgColor={'#FAFDFD'}
            title={'My offers'}
            isCardVariant={false}
          ></OfferCollection>
        )}
      </Grid>
    </Grid>
  );
}
