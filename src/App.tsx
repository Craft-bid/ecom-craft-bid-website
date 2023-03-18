import { Header } from './templates/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Grid } from '@mui/material';
export function App() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'flex-end'}
      height={'100vh'}
    >
      <Header />
      <SearchBar />
    </Grid>
  );
}
