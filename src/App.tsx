import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { OfferListPage } from './pages/OfferListPage';
import { UserPage } from './pages/UserPage';
import axios from 'axios';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    // Add a request interceptor
    const interceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
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
        element={<OfferPage />}
      />
      <Route
        path='/offers'
        element={<OfferListPage></OfferListPage>}
      />
      <Route
        path='/user'
        element={<UserPage />}
      />
    </Routes>
  );
}
