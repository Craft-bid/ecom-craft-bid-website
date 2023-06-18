import { RegisterFormDTO } from '../components/RegisterForm/RegisterForm.types';
import { LoginFormDTO } from '../components/LoginForm/LoginForm.types';
import axios, { AxiosError } from 'axios';
import { NetworkError } from '../common/exceptions/NetworkError';
import { ResponseError } from '../common/exceptions/ResponseError';
import { DecodedToken, JWTResponse } from '../common/types/JWTResponse.types';
import jwtDecode from 'jwt-decode';

export const registerUser = async (user: RegisterFormDTO) => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/register', user);
    console.log(`registerUser responded!`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new ResponseError('Registration failed. Please try again.', error.response.status);
      } else if (error.request) {
        throw new NetworkError('Network error. Please try again later.');
      } else {
        throw new Error('Unknown error. Please try again later.');
      }
    } else {
      throw new Error('Unknown error. Please try again later.');
    }
  }
};

export const loginUser = async (user: LoginFormDTO) => {
  try {
    const { data } = await axios.post<JWTResponse>('http://localhost:8080/api/v1/auth/authenticate', user);
    const token: string = data.token;
    localStorage.setItem('token', token);
    console.log(token);
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new ResponseError('Login failed. Please try again.', error.response.status);
      } else if (error.request) {
        throw new NetworkError('Network error. Please try again later.');
      } else {
        throw new Error('Unknown error. Please try again later.');
      }
    } else {
      throw new Error('Unknown error. Please try again later.');
    }
  }
};

export const getId = async (token: string): Promise<number> => {
  return await axios.post<number>('http://localhost:8080/api/v1/public/users/myId', token).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
