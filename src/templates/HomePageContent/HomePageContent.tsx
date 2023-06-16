import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import { getTags } from '../../services/tagService';
import { Tag } from '../../common/types/Tag.types';

export function HomePageContent() {
  const [categories, setCategories] = useState<Tag[]>([]);

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
        Looking to use the skills you have?
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
      <Typography
        variant={'h2'}
        paddingTop={10}
        paddingBottom={10}
      >
        Check out our available categories.
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
      </Grid>
    </Grid>
  );
}
