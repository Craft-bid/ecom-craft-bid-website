import { Card, Grid, Typography, Rating } from '@mui/material';
import { BidDTO } from '../../common/types/Bid.types';
import { OfferBidListProps } from './OfferBidList.types';

export function OfferBidList(props: OfferBidListProps) {
  const { bidList } = props;
  const pageLength = bidList.length;
  return (
    <Grid container>
      <Typography>
        {' '}
        Listing bids. {pageLength}/{bidList.length}
      </Typography>
      {bidList.map((bid: BidDTO) => {
        return (
          <Card key={bid.id}>
            <Grid
              item
              width={'20%'}
            >
              <img
                src={bid.photoURL}
                width={'100%'}
                height={'100%'}
                alt='bidder'
              ></img>
            </Grid>
            <Grid
              item
              width={'80%'}
            >
              <Grid>
                <Typography>
                  {bid.bidderName} {bid.bidderSurname}, {bid.bidderCountry}, {bid.bidderCity}
                </Typography>
                <Rating
                  value={Number(bid.bidderRating)}
                  readOnly
                ></Rating>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
}
