import { Grid, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { UserContentProps } from './UserContent.types';
import '@fontsource/montserrat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';
import { OfferCollection } from '../OfferCollection/OfferCollection';
export function UserContent(props: UserContentProps) {
  const { offerCardProps } = props;
  const data = [
    {
      label: props.verified ? (
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
          {props.stars}
          {'/5'}
        </>
      ),
    },
    {
      label: `Phone Number: ${props.phoneNumber}`,
    },
    {
      label: `Email: ${props.email}`,
    },
  ];
  const stats = [
    {
      label: `${props.name} has joined in ${props.joined.toLocaleString('default', { month: 'long' })},${props.joined.getFullYear()}`,
    },
    {
      label: `${props.name} has worked in ${props.workedIn} jobs`,
    },
    {
      label: `${props.name} has ${props.customerSatisfaction}% customer satisfaction`,
    },
  ];
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
              src={props.image}
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
              {props.name} {props.surname}, {props.country}, {props.city}
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
          <Grid
            item
            container
            flexDirection={'column'}
            mobile={12}
            flexWrap={'nowrap'}
          >
            <Grid item>
              <Typography
                fontFamily={'Montserrat'}
                fontSize={30}
                fontStyle={'normal'}
                fontWeight={400}
              >
                Skills:
              </Typography>
            </Grid>
            <Grid
              item
              container
              flexDirection={'row'}
              spacing={2}
            >
              {props.skills.map((skill) => {
                return (
                  <Grid
                    item
                    key={skill}
                  >
                    <Typography
                      fontFamily={'Montserrat'}
                      fontSize={22}
                      fontStyle={'normal'}
                      fontWeight={400}
                    >
                      {skill}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
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
          {props.aboutMe}
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
      </Grid>
      <Grid
        mobile={12}
        item
        container
        flexWrap={'nowrap'}
      >
        {' '}
        <OfferCollection offerCardProps={offerCardProps.filter( (element) => {
          
        })}></OfferCollection>
      </Grid>
    </Grid>
  );
}
