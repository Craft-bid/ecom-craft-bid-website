import React from 'react';
import { Admin, AuthProvider, ListGuesser, Resource, UserIdentity } from 'react-admin';
import dataProvider from '../services/dataProvider';
import { ListingList } from './AdminPageLists/ListingList';
import { loginUser } from '../services/authService';
import { LoginFormDTO } from '../components/LoginForm/LoginForm.types';
import jwt_decode from 'jwt-decode';
import { authProvider } from '../services/authProvider';

export function AdminPage() {
  const dataProvider2 = dataProvider('http://localhost:8080/api/v1/admin');
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
