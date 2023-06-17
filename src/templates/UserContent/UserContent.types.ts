import { OfferDTO } from '../../common/types/OfferDTO.types';

export enum Role {
  USER,
  ADMIN,
  BLOCKED,
}
export interface UserContentProps {
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
