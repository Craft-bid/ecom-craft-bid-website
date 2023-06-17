import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../services/dataProvider';
import { ListingList } from './AdminPageLists/ListingList';
import { authProvider } from '../services/authProvider';
import { UserList } from './AdminPageLists/UserList';

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
        list={UserList}
      />
      <Resource
        name='listings'
        list={ListingList}
      />
    </Admin>
  );
}
