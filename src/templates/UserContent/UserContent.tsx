import { Grid, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '@fontsource/montserrat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import { OfferCollection } from '../OfferCollection/OfferCollection';
import React, { useContext } from 'react';
import userImage from '../../assets/user.png';
import { AuthenticationContext } from '../../components/AuthenticationContext/AuthenticationContext';
import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';
import { UserDTO } from '../../common/types/DTOs.types';
import { useTranslation } from 'react-i18next';

export function UserContent(props: UserDTO) {
  const { t } = useTranslation();
  const { aboutMe, averageRating, city, country, email, id, image, joined, listings, name, phoneNumber, stars, surname, verified, workedIn } = props;

  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('AuthenticationContext is null');
  }
  const isOwner = id === context.id;

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
      label:
        stars && stars !== 'null' ? (
          <>
            <Icon
              component={StarIcon}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            {stars}
            {'/5'}
          </>
        ) : (
          `No rating available`
        ),
    },
    {
      label: `Phone Number: ${phoneNumber || 'Not provided'}`,
    },
    {
      label: `Email: ${email}`,
    },
  ];
  const date = new Date(joined);

  const fullYear = date.getFullYear();
  const month = date.getMonth();

  const stats = [
    {
      label: `${isOwner ? 'You have' : `${name} has`} joined in ${month}/${fullYear}`,
    },
    {
      label: `${isOwner ? 'You have' : `${name} has`} worked in ${workedIn} jobs`,
    },
    {
      label: `${isOwner ? 'You have' : `${name} has`} an average rating of ${averageRating}`,
    },
  ];

  return (
    <Grid
      maxWidth={1480}
      height={'auto'}
      minHeight={'500px'}
      container
      bgcolor='#FAFDFD'
      borderRadius={10}
      padding={2}
      marginTop={4}
      marginBottom={6}
      flexDirection={'column'}
      flexWrap={'nowrap'}
      spacing={2}
    >
      <Typography
        fontFamily={'Montserrat'}
        fontSize={60}
        fontStyle={'normal'}
        fontWeight={300}
        textAlign={'center'}
      >
        {isOwner ? 'Welcome to your profile!' : `${name}'s profile`}
      </Typography>
      <Grid
        mobile={12}
        item
        container
        maxHeight={'40%'}
        height={'auto'}
        flexDirection={'row'}
        flexWrap={'nowrap'}
      >
        <Box
          borderRadius={5}
          overflow={'hidden'}
        >
          {image ? (
            <img
              src={image}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              alt='offer'
            />
          ) : (
            <img
              src={userImage}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              alt='offer'
            />
          )}
        </Box>
        <Grid
          item
          container
          flexDirection={'column'}
          gap={6}
        >
          <Grid
            item
            container
            flexDirection={'column'}
            justifyContent={'space-between'}
            mobile={12}
            width={'auto'}
            marginLeft={2}
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
                    fontSize={24}
                    fontStyle={'normal'}
                    fontWeight={400}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            mobile={12}
            container
            justifyContent={'space-between'}
            flexDirection={'column'}
          >
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              Name: {name ? name : 'Not provided.'}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              Surname: {surname ? surname : 'Not provided.'}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              Country: {country ? country : 'Not provided.'}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              City: {city ? city : 'Not provided.'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        mobile={12}
        container
        flexDirection={'column'}
        marginBottom={2}
        marginTop={2}
      >
        <Typography
          fontFamily={'Montserrat'}
          fontSize={48}
          fontStyle={'normal'}
          fontWeight={400}
          textAlign={'center'}
        >
          About {isOwner ? 'you' : `me`}
        </Typography>
        <Typography
          fontFamily={'Montserrat'}
          fontSize={20}
          fontStyle={'normal'}
          fontWeight={400}
          marginTop={1}
        >
          {aboutMe
            ? aboutMe
            : `Unfortunately, ${isOwner ? 'you have' : `${name} has`} provided no description about ${
                isOwner ? `your` : `their`
              } past activities or skills.`}
        </Typography>
      </Grid>
      <Grid
        item
        mobile={12}
        maxHeight={'25%'}
        container
        flexDirection={'column'}
      >
        <Typography
          fontFamily={'Montserrat'}
          fontSize={48}
          fontStyle={'normal'}
          fontWeight={400}
          textAlign={'center'}
        >
          Statistics
        </Typography>
        <Grid
          item
          container
          flexDirection={'row'}
          flexWrap={'nowrap'}
          justifyContent={'space-between'}
          marginTop={1}
          marginBottom={4}
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
            title={t('offerListPage.offers')}
            isCardVariant={false}
          ></OfferCollection>
        )}
      </Grid>
    </Grid>
  );
}
