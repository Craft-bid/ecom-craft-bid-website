import React from 'react';
import { Admin, Resource } from 'react-admin';

export function AdminPage() {
  return (
    <Admin>
      <Resource name='admin/users' />
      <Resource name='admin/offers' />
      <Resource name='admin/categories' />
      <Resource name='admin/bids' />
    </Admin>
  );
}
