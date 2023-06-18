import axios, { AxiosError } from 'axios';
import { NetworkError } from '../common/exceptions/NetworkError';
import { ResponseError } from '../common/exceptions/ResponseError';
import { Tag } from '../common/types/Tag.types';
import { Category } from '../templates/HomePageContent/HomePageContent.types';

export type addOfferDTO = {
  title: string;
  description: string;
  advertiserId: string;
};

export type updateOfferDTO = {
  title: string;
  description: string;
  ended: boolean;
  winnerId: string;
  advertiserId: string;
  expirationDate: string;
  creationDate: string;
};
export type Offer = {
  advertiserId?: string;
  avgBid?: number;
  bids?: [];
  creationDate?: string;
  description?: string;
  ended?: boolean;
  expirationDate?: Date;
  id?: string;
  photos?: [];
  tags?: [];
  title?: string;
  winnerId?: string;
};

export type createBidDTO = {
  price: number;
  description: string;
  daysToDeliver: number;
  bidderId: string;
  listingId: string;
};
export const addOffer = async (listing: addOfferDTO): Promise<Offer> => {
  return await axios
    .post<Offer>('http://localhost:8080/api/v1/private/listings', listing)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new ResponseError('Adding offer failed.', error.response.status);
      } else if (error.request) {
        throw new NetworkError('Network error. Please try again later.');
      } else {
        throw new Error('Unknown error. Please try again later.');
      }
    });
};

export const updateOffer = async (listingid: number, listing: updateOfferDTO): Promise<Offer> => {
  return await axios.patch<Offer>(`http://localhost:8080/api/v1/private/listings/${listingid}`, listing).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const addTags = async (listingid: number, tags: Category[]): Promise<Offer> => {
  return await axios.post<Offer>(`http://localhost:8080/api/v1/private/${listingid}/tags`, tags).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
export const addPhoto = async (listingid: number, photo: File): Promise<Offer> => {
  const formData = new FormData();
  formData.append('photos', photo);
  return await axios
    .post<Offer>(`http://localhost:8080/api/v1/private/${listingid}/photos`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const addBid = async (bid: createBidDTO) => {
  await axios.post('http://localhost:8080/api/v1/private/bids', bid).then((response) => {
    console.log(response.data);
  });
};
