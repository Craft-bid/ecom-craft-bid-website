import axios from 'axios';
import { Tag } from '../common/types/Tag.types';

export const getTags = async () => {
  return await axios
    .get<Tag[]>('http://localhost:8080/api/v1/public/tags')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error(`Error while fetching tags.`);
    });
};
