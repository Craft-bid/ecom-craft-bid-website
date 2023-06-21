import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';
import { FilterParams } from '../OfferListPageContent/FilterParams.types';

export interface OfferCollectionProps {
  offerCardProps: OfferCardProps[];
  bgColor: string;
  title: string;
  isCardVariant: boolean;
  pages: number;
  currentPage: number;
  setFilter: (page: FilterParams) => void;
}
