import axios from 'axios';

export const getTags = async () => {
  return await axios
    .get<TagDTO>('http://localhost:8080/api/v1/public/tags')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(() => {
      throw new Error('Error while fetching tags.');
    });
};
