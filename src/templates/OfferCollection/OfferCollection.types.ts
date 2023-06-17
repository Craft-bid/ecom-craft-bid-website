import { OfferCardProps } from '../../components/OfferCard/OfferCard.types';

export interface OfferCollectionProps {
  offerCardProps: OfferCardProps[];
  bgColor: string;
  title: string;
  isCardVariant: boolean;
}
