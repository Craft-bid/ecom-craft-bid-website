import React from 'react';
import { Admin, AuthProvider, ListGuesser, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { ListingList } from './AdminPageLists/ListingList';
import { BrowserRouter, Link } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { LoginFormDTO } from '../components/LoginForm/LoginForm.types';
import axios from 'axios';
export function AdminPage() {
  const dataProvider2 = dataProvider('http://localhost:8080/api/v1/admin');

  const authProvider: AuthProvider = {
    login: ({ username, password }) => {
      const loginDTO: LoginFormDTO = {
        email: username,
        password: password,
      };
      return loginUser(loginDTO).then((response) => {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        void axios.post('http://localhost:8080/api/v1/public/users/myId', token).then((response) => {
          console.log(response);
        });
      });
    },
    logout: () => {
      localStorage.removeItem('token');
      return Promise.resolve();
    },
    getIdentity: () => {
      try {
        const { sub } = JSON.parse(localStorage.getItem('token'));
        return Promise.resolve({ sub });
      } catch (error) {
        return Promise.reject(error);
      }
    },
    checkAuth: () => {
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ message: false });
    },
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject({ message: false });
        //return Promise.reject({ message: 'Unauthorized user!' });
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
  };
  return (
    <Admin
      dataProvider={dataProvider2}
      authProvider={authProvider}
      basename='/admin'
    >
      <Resource
        name='users'
        list={ListGuesser}
      />
      <Resource
        name='listings'
        list={ListingList}
      />
    </Admin>
  );
}
