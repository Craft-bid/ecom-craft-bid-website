import axios, { AxiosError } from 'axios';
import { NetworkError } from '../common/exceptions/NetworkError';
import { ResponseError } from '../common/exceptions/ResponseError';
import { AddOfferDTO, CreateBidDTO, OfferDTO, UpdateOfferDTO } from '../common/types/DTOs.types';
import { Tag } from '../common/types/Tag.types';

export const addOffer = async (listing: AddOfferDTO): Promise<OfferDTO> => {
  return await axios
    .post<OfferDTO>('http://localhost:8080/api/v1/private/listings', listing)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        throw new ResponseError('Adding offer failed.', error.response.status);
      } else if (error.request) {
        throw new NetworkError('Network error. Please try again later.');
      } else {
        throw new Error('Unknown error. Please try again later.');
      }
    });
};

export const updateOffer = async (listingid: number, listing: UpdateOfferDTO): Promise<OfferDTO> => {
  return await axios.patch<OfferDTO>(`http://localhost:8080/api/v1/private/listings/${listingid}`, listing).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const addTags = async (listingid: number, tags: Tag[]): Promise<OfferDTO> => {
  return await axios.post<OfferDTO>(`http://localhost:8080/api/v1/private/${listingid}/tags`, tags).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
export const addPhoto = async (listingid: number, photo: File): Promise<OfferDTO> => {
  const formData = new FormData();
  formData.append('photos', photo);
  return await axios
    .post<OfferDTO>(`http://localhost:8080/api/v1/private/${listingid}/photos`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const addBid = async (bid: CreateBidDTO) => {
  await axios.post('http://localhost:8080/api/v1/private/bids', bid).then((response) => {
    console.log(response.data);
  });
};
