import { Grid, Typography, Rating, Button } from '@mui/material';
import { BidDTO } from '../../common/types/DTOs.types';
import { OfferBidListProps } from './OfferBidList.types';
import { updateOffer } from '../../services/offerService';
import { UpdateOfferDTO } from '../../common/types/DTOs.types';

export function OfferBidList(props: OfferBidListProps) {
  const { bidList, isOwner, listingId } = props;
  const pageLength = bidList.length;

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
        Listing bids. {pageLength}/{bidList.length}
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
          >
            <Grid
              item
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
            >
              <img
                src={bid.photoURL}
                width={180}
                height={180}
                style={{ borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
                alt='bidder'
              ></img>

              <Typography
                fontFamily={'Montserrat'}
                fontSize={32}
                fontWeight={300}
                textAlign={'center'}
              >
                {bid.bidderName} {bid.bidderSurname}, {bid.bidderCountry}, {bid.bidderCity}
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
                  Accept
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
