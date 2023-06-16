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
