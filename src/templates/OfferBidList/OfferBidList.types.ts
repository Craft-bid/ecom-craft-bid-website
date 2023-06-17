import { BidDTO } from '../../common/types/Bid.types';

export interface OfferBidListProps {
  bidList: BidDTO[];
  isOwner: boolean;
  listingId: number;
}
