import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';

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
    </Routes>
  );
}
