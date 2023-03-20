import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './SearchBar.module.scss';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleClickShowSearch: () => void = () => {
    return console.log('search');
  };

  return (
    <TextField
      label='Search'
      value={searchValue}
      fullWidth={true}
      onChange={(event) => {
        console.log(event.target.value);
        return setSearchValue(event.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            className={styles.button}
            position='end'
          >
            <Button className={styles.button}>
              <SearchIcon
                className={styles.button}
                onClick={handleClickShowSearch}
              />
            </Button>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}
