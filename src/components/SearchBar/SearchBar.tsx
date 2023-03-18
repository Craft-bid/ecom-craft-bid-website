import { TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleClickShowSearch: () => void = () => {
    return console.log('search');
  };

  return (
    <TextField
      label='Search'
      value={searchValue}
      onChange={(event) => {
        console.log(event.target.value);
        return setSearchValue(event.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon onClick={handleClickShowSearch} />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}
