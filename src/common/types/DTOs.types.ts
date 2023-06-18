import { Tag } from './Tag.types';

export enum Role {
  USER,
  ADMIN,
  BLOCKED,
}

export type BidDTO = {
  id: number;
  price: number;
  description: string;
  creationDate: Date;
  daysToDeliver: number;
  bidderName: string;
  bidderSurname: string;
  bidderCountry: string;
  bidderCity: string;
  bidderRating: number;
  photoURL: string;
  UserID: number;
};

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

export interface UserDTO {
  id: number;
  name: string;
  email: string;
  image: string;
  role: Role;
  surname: string;
  country: string;
  city: string;
  verified: boolean;
  stars: string;
  phoneNumber: string;
  aboutMe: string;
  joined: Date;
  workedIn: number;
  averageRating: number;
  listings: OfferDTO[];
}

export type AddOfferDTO = {
  title: string;
  description: string;
  advertiserId: string;
};

export type UpdateOfferDTO = {
  title: string;
  description: string;
  ended: boolean;
  winnerId: string;
  advertiserId: string;
  expirationDate: string;
  creationDate: string;
};

export type CreateBidDTO = {
  price: number;
  description: string;
  daysToDeliver: number;
  bidderId: string;
  listingId: string;
};
