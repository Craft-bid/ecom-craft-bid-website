import { fetchUtils } from 'react-admin';

const { fetchJson } = fetchUtils;

type ResourceType = 'admin/users' | 'admin/offers' | 'admin/categories' | 'admin/bids';

interface ResponseData<T> {
  data: T;
  total?: number;
}

const apiUrl = 'http://localhost:8080/api'; // Replace with your API URL

export const customDataProvider = () => {
  return {
    getList: <T>(resource: ResourceType, params: any): Promise<ResponseData<T[]>> => {
      const url = `${apiUrl}/${resource}`;
      const options = {
        method: 'GET',
      };
      return fetchJson(url, options).then((response: T[]) => {
        return {
          data: response,
          total: response.length, // Adjust the total based on your API response
        };
      });
    },

    getOne: <T>(resource: ResourceType, params: { id: string }): Promise<ResponseData<T>> => {
      const { id } = params;
      const url = `${apiUrl}/${resource}/${id}`;
      const options = {
        method: 'GET',
      };
      return fetchJson(url, options).then((response: T) => {
        return {
          data: response,
        };
      });
    },

    create: <T>(resource: ResourceType, params: { data: T }): Promise<ResponseData<T>> => {
      const url = `${apiUrl}/${resource}`;
      const options = {
        method: 'POST',
        body: JSON.stringify(params.data),
      };
      return fetchJson(url, options).then((response: T) => {
        return {
          data: response,
        };
      });
    },

    update: <T>(resource: ResourceType, params: { id: string; data: T }): Promise<ResponseData<T>> => {
      const { id } = params;
      const url = `${apiUrl}/${resource}/${id}`;
      const options = {
        method: 'PUT',
        body: JSON.stringify(params.data),
      };
      return fetchJson(url, options).then((response: T) => {
        return {
          data: response,
        };
      });
    },

    delete: <T extends { status: number; headers: Headers; body: string; json: any }>(
      resource: ResourceType,
      params: { id: string }
    ): Promise<ResponseData<T>> => {
      const { id } = params;
      const url = `${apiUrl}/${resource}/${id}`;
      const options = {
        method: 'DELETE',
      };
      return fetchJson(url, options).then((response: T) => {
        return {
          data: response,
        };
      });
    },
  };
};
