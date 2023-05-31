import axios from 'axios';
export interface TagDTO {
  id: number;
  name: string;
}

export const getTags = async () => {
  return await axios
    .get('http://localhost:8080/api/tags')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then((data: TagDTO[]) => {
      return data;
    })
    .catch(() => {
      throw new Error('Error while fetching tags.');
    });
};
