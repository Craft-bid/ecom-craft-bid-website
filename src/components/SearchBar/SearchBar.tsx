import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './SearchBar.module.scss';
import { Search } from 'react-router';
import { SearchBarProps } from './SearchBar.types';

export function SearchBar({ handleSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const inputStyle = {
    backgroundColor: '#F5FBFB',
    height: '48px',
  };

  const handleClickShowSearch: () => void = () => {
    console.log('searchValue', searchValue);
    if (handleSearch !== undefined) {
      handleSearch(searchValue);
    }
  };

  return (
    <TextField
      value={searchValue}
      fullWidth={true}
      onChange={(event) => {
        return setSearchValue(event.target.value);
      }}
      InputLabelProps={{ shrink: false }}
      InputProps={{
        style: inputStyle,
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
    />
  );
}
