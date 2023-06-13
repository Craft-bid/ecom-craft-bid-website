import { Bid } from './Bid.types';
import { Tag } from './Tag.types';

export interface Listing {
  id: number;
  title: string;
  ended: boolean;
  expirationDate: Date;
  creationDate: Date;
  description: string;

  //TODO: add photos
  photos: Array<string>;
  bids: Array<Bid>;
  advertiser: User;
  winner: User;
  tags: Set<Tag>;
}
