import axios from 'axios';

export const createBid = async (bid: ListingDTO) => {
  return await axios
    .post('http://localhost:8080/api/bids', bid)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then((data: Bid) => {
      return data;
    })
    .catch(() => {
      throw new Error('Error while creating bid.');
    });
};
