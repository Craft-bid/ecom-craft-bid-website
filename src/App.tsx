import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { OfferListPage } from './pages/OfferListPage';

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
    </Routes>
  );
}
