import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import '@fontsource/montserrat';
import '@fontsource/lato';

export function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
    </Routes>
  );
}
