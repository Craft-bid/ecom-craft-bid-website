export type OfferBidCreationFormValues = {
  bidDescription: string;
  price: number;
  daysToDeliver: number;
};

export type LoginFormErrors = Partial<Record<keyof OfferBidCreationFormValues, string>>;

export type LoginFormDTO = OfferBidCreationFormValues & {
  ListingId: string;
};
