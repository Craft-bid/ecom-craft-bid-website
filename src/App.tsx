import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { OfferPage } from './pages/OfferPage';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { OfferListPage } from './pages/OfferListPage';
import { OfferCard } from './components/OfferCard/OfferCard';
import { OfferCardProps } from './components/OfferCard/OfferCard.types';

const OFFER_CARD_PROPS: OfferCardProps = {
  image: 'https://picsum.photos/200/300',
  title: 'CNC OPERATOR NEEDED',
  description: 'Looking for a CNC operator with a machine to make a  metal part necessary for my  project.',
  bids: 32,
  avgBid: 120,
};

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
        path='/offer'
        element={<OfferCard {...OFFER_CARD_PROPS} />}
      />
    </Routes>
  );
}
