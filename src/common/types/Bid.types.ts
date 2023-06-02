import { Listing } from './Listing.types';

export interface Bid {
  id: number;

  price: number;
  description: string;
  creationDate: Date;
  daysToDeliver: number;

  bidder: User;
  listing: Listing;
}

