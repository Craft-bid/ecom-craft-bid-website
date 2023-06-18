import { BidDTO } from '../../common/types/DTOs.types';

export interface OfferBidListProps {
  bidList: BidDTO[];
  isOwner: boolean;
  listingId: number;
}
