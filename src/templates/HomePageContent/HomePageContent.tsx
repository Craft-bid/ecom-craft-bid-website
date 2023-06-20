import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { useContext, useEffect, useState } from 'react';
import { getTags } from '../../services/tagService';
import { Tag } from '../../common/types/Tag.types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthenticationContext } from '../../components/AuthenticationContext/AuthenticationContext';

export function HomePageContent() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<Tag[]>([]);
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('AuthenticationContext is null');
  }
  const { isAuthenticated } = context;
  const homePageSxObj = {
    backgroundColor: '#E8F6F6',
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

  const startIndex = 0;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const secondPartIndex = Math.floor(categories.length / 3);
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const thirdPartIndex = Math.floor((categories.length * 2) / 3);
  useEffect(() => {
    getTags()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Grid
      container
      height={'auto'}
      sx={homePageSxObj}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Typography
        variant={'h2'}
        paddingTop={10}
        paddingBottom={10}
      >
        {t('homePage.skillsHeader')}
      </Typography>
      <Grid
        item
        container
        justifyContent={'center'}
        alignItems={'center'}
        gap={15}
      >
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}>{t('homePage.browseHeader')}</Typography>

            <Typography sx={cardContentSxObj}>{t('homePage.browseDesc')}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}> {t('homePage.payHeader')}</Typography>
            <Typography sx={cardContentSxObj}>{t('homePage.payDesc')}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, borderRadius: 10 }}>
          <CardContent>
            <Typography sx={subHeadingSxObj}> {t('homePage.costHeader')} </Typography>
            <Typography sx={cardContentSxObj}>{t('homePage.costDesc')}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Typography
        variant={'h2'}
        paddingTop={10}
        paddingBottom={10}
      >
        {t('homePage.categoriesHeader')}
      </Typography>

      <Grid
        item
        justifyContent={'center'}
        alignItems={'center'}
        gap={15}
        paddingBottom={10}
        container
      >
        <Card sx={{ width: 400, borderRadius: 10 }}>
          <CardContent>
            {categories
              .map((category) => {
                return category.name;
              })
              .slice(startIndex, secondPartIndex)
              .map((cat, index) => {
                return (
                  <Typography
                    key={index}
                    textAlign={'center'}
                    sx={cardContentSxObj}
                  >
                    {' '}
                    {cat}{' '}
                  </Typography>
                );
              })}
          </CardContent>
        </Card>

        <Card sx={{ width: 400, borderRadius: 10 }}>
          <CardContent>
            {categories
              .map((category) => {
                return category.name;
              })
              .slice(secondPartIndex, thirdPartIndex)
              .map((name, index) => {
                return (
                  <Typography
                    key={index}
                    textAlign={'center'}
                    sx={cardContentSxObj}
                  >
                    {' '}
                    {name}{' '}
                  </Typography>
                );
              })}
          </CardContent>
        </Card>

        <Card sx={{ width: 400, borderRadius: 10 }}>
          <CardContent>
            {categories
              .map((category) => {
                return category.name;
              })
              .slice(thirdPartIndex, categories.length)
              .map((name, index) => {
                return (
                  <Typography
                    key={index}
                    textAlign={'center'}
                    sx={cardContentSxObj}
                  >
                    {' '}
                    {name}{' '}
                  </Typography>
                );
              })}
          </CardContent>
        </Card>
        <Typography variant={'h2'}>{t('homePage.submitHeader')}</Typography>
        {isAuthenticated ? (
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Card sx={{ maxWidth: 600, borderRadius: 10 }}>
              <CardContent>
                <Link to={'/submit_offer'}>
                  <Typography sx={subHeadingSxObj}>{t('homePage.submitLink')}</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}
