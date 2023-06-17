import { BidDTO } from './Bid.types';
import { Tag } from './Tag.types';

export type OfferDTO = {
  id: number;
  title: string;
  ended: boolean;
  expirationDate: Date;
  creationDate: Date;
  description: string;
  photos: string[];
  bids: BidDTO[];
  tags: Tag[];
  advertiserId: number;
  winnerId: number;
  avgBid: number;
};
