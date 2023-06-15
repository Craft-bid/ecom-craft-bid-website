import { UserContentProps } from '../UserContent/UserContent.types';

export interface OfferBidListProps {
  bidList: {
    id: number;
    price: number;
    description: string;
    creationDate: Date;
    daysToDeliver: number;
    bidder: UserContentProps;
  }[];
}
