import { Tag } from '../../common/types/Tag.types';

export interface OfferInfoProps {
  offerDescription: string;
  offerImageUrls: string[];
  offerTags: Tag[];
  offerOwnerName: string;
  offerOwnerSurname: string;
  offerOwnerStatus: string;
  offerOwnerRating: number;
}
