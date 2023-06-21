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
          {t('userPage.verifiedUser')}{' '}
        </>
      ) : (
        t('userPage.notVerifiedUser')
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
          t('userPage.noRating')
        ),
    },
    {
      label: `${t('userPage.phoneNumber')}: ${phoneNumber || t('userPage.notProvided')}`,
    },
    {
      label: `${t('userPage.email')}: ${email}`,
    },
  ];
  const date = new Date(joined);

  const fullYear = date.getFullYear();
  const month = date.getMonth();

  const stats = [
    {
      label: `${isOwner ? t('userPage.statStart') : `${name} ${t('userPage.statStart1')}`} ${
        isOwner ? t('userPage.joinedOwner') : t('userPage.joinedNotOwner')
      } ${month}/${fullYear}`,
    },
    {
      label: `${isOwner ? t('userPage.statStart') : `${name} ${t('userPage.statStart1')}`} ${
        isOwner ? t('userPage.workedInOwner') : t('userPage.workedInNotOwner')
      } ${workedIn} ${t('userPage.jobs')}`,
    },
    {
      label: `${isOwner ? t('userPage.statStart') : `${name} ${t('userPage.statStart1')}`} ${
        isOwner ? t('userPage.avgRatingOwner') : t('userPage.avgRatingNotOwner')
      } ${averageRating}`,
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
        {isOwner ? t('userPage.isOwnerWelcome') : `${t('userPage.isNotOwnerWelcomePostfix')} ${name}${t('userPage.isNotOwnerWelcomePostfix')}}`}
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
              {t('userPage.name')}: {name ? name : t('userPage.notProvided')}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              {t('userPage.surname')}: {surname ? surname : t('userPage.notProvided')}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              {t('userPage.country')}: {country ? country : t('userPage.notProvided')}
            </Typography>
            <Typography
              fontFamily={'Montserrat'}
              fontSize={24}
              fontStyle={'normal'}
              fontWeight={400}
            >
              {t('userPage.city')}: {city ? city : t('userPage.notProvided')}
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
          {t('userPage.about')} {isOwner ? t('userPage.me') : t('userPage.them')}
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
            : ` ${t('userPage.unfortunately')}, 
            ${isOwner ? t('userPage.unfortunatelyOwner') : t('userPage.unfortunatelyNotOwner')} ${t('userPage.unfortunatelyNoOwner')} `}
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
          {t('userPage.statistics')}
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
