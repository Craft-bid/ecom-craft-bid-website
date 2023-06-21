import { Grid, Typography, Rating, Button } from '@mui/material';
import { BidDTO } from '../../common/types/DTOs.types';
import { OfferBidListProps } from './OfferBidList.types';
import userImage from '../../assets/user.png';
import { updateOffer } from '../../services/offerService';
import { UpdateOfferDTO } from '../../common/types/DTOs.types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function OfferBidList(props: OfferBidListProps) {
  const { t } = useTranslation();
  const { bidList, isOwner, listingId } = props;
  const pageLength = bidList.length;
  const navigate = useNavigate();

  const handleAccept = (userId: number) => {
    if (!userId) {
      throw new Error('User id not found');
    }
    const update: UpdateOfferDTO = {
      ended: true,
      winnerId: String(userId),
    };
    console.log(userId);
    void updateOffer(listingId, update).then(() => {
      window.location.reload();
    });
  };

  return (
    <Grid
      container
      display={'flex'}
      flexDirection={'column'}
      marginTop={2}
    >
      <Typography
        fontFamily={'Montserrat'}
        fontSize={48}
        fontWeight={300}
      >
        {t('offerPage.bidListHeader')} {pageLength}/{bidList.length}
      </Typography>
      {/* Each card needs to have an accept button, if the user browsing this is the owner of the bid*/}
      {bidList.map((bid: BidDTO) => {
        return (
          <Grid
            key={bid.id}
            sx={{
              marginTop: '48px',
              backgroundColor: '#FAFDFD',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            }}
            container
            onClick={() => {
              navigate(`/user/${bid.bidderId}`);
            }}
          >
            <Grid
              item
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
            >
              {bid.photoURL ? (
                <img
                  src={bid.photoURL}
                  alt='offer'
                  style={{
                    maxWidth: '160px',
                    maxHeight: '160px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                ></img>
              ) : (
                <img
                  src={userImage}
                  alt='offer'
                  style={{
                    maxWidth: '160px',
                    maxHeight: '160px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                ></img>
              )}

              <Typography
                fontFamily={'Montserrat'}
                fontSize={32}
                fontWeight={300}
                textAlign={'center'}
              >
                {bid.bidderName}
                {bid.bidderCountry ? `${bid.bidderSurname},` : bid.bidderSurname}
                {bid.bidderCity ? `${bid.bidderCountry},` : bid.bidderCountry}
                {bid.bidderCity}
              </Typography>
              {/* center if mobile */}

              <Rating
                value={Number(bid.bidderRating)}
                precision={0.5}
                readOnly
                sx={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}
              ></Rating>
            </Grid>
            {/* Description*/}
            <Grid
              marginTop={2}
              marginBottom={3}
            >
              <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 'Regular', fontSize: '20px', letterSpacing: '0.15px' }}>
                {bid.description}
              </Typography>
              {/* This button sends out a PUT request to PUT http://localhost:8080/api/v1/private/{{listingId}}/winner/{{userId}} */}
              {isOwner && (
                <Button
                  variant='contained'
                  color='info'
                  sx={{
                    marginTop: 2,
                    width: 1,
                  }}
                  onClick={() => {
                    return handleAccept(bid.bidderId);
                  }}
                >
                  {t('offerPage.acceptButton')}
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
