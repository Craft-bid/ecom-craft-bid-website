import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { OfferListPage } from './pages/OfferListPage';
import { UserPage } from './pages/UserPage';

export function App() {
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
