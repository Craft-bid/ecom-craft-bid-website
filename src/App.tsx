import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { OfferListPage } from './pages/OfferListPage';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

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
        path='/login'
        element={<LoginForm />}
      />
      <Route
        path='/register'
        element={<RegisterForm />}
      />
    </Routes>
  );
}
