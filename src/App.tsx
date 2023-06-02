/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CreateOfferPage } from './pages/CreateOfferPage';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/lato';
import '@fontsource/roboto';
import '@fontsource/libre-baskerville';
import { OfferListPage } from './pages/OfferListPage';
import { UserPage } from './pages/UserPage';
import axios from 'axios';
import { useEffect } from 'react';
import { OfferPage } from './pages/OfferPage';
import { DecodedToken } from './common/types/JWTResponse.types';
import jwtDecode from 'jwt-decode';
import { AdminPage } from './pages/AdminPage';

export function App() {
  useEffect(() => {
    // Add a request interceptor
    const interceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (!token) {
          return config;
        }
        const decodedToken = jwtDecode<DecodedToken>(token);
        if (decodedToken && decodedToken.exp > Date.now() / 1000) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // Remove the request interceptor on component unmount
    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/submit_offer'
        element={<CreateOfferPage />}
      />
      <Route
        path='/offers'
        element={<OfferListPage></OfferListPage>}
      />
      <Route
        path='/user/:id'
        element={<UserPage />}
      />
      <Route
        path='/offer/:id'
        element={<OfferPage />}
      />
      <Route
        path='/admin'
        element={<AdminPage />}
      />
    </Routes>
  );
}
