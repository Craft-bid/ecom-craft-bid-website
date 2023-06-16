import { Category } from '../HomePageContent/HomePageContent.types';

export interface OfferInfoProps {
  offerDescription: string;
  offerImageUrls: string[];
  offerCategories: Category[];
  offerOwnerName: string;
  offerOwnerSurname: string;
  offerOwnerStatus: string;
  offerOwnerRating: number;
}
