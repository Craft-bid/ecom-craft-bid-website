/* eslint-disable @typescript-eslint/no-magic-numbers */
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Autocomplete, Card, Chip, Grid, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Category } from '../../templates/HomePageContent/HomePageContent.types';

export function SubmitOfferForm() {
  const [categories, setCategories] = useState<Category[]>([]);

  const formSxObj = { backgroundColor: '#F5FBFB', width: '55rem', minHeight: 1400, borderRadius: 10 };
  const fetchUrl = '../src/templates/OfferContent/testCategories.json';

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data: []) => {
        return setCategories(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <Card sx={formSxObj}>
      <Grid
        marginTop={6}
        marginRight={2}
        marginLeft={2}
      >
        <Typography>Type in title</Typography>
        <TextField></TextField>
        <Typography>Description</Typography>
        <TextareaAutosize></TextareaAutosize>
        <Typography>Choose categories</Typography>
        <Autocomplete
          multiple
          id='size-small-filled-multi'
          size='small'
          options={categories.length > 0 ? categories : []}
          getOptionLabel={(option) => {
            return option.name;
          }}
          defaultValue={categories.length > 0 ? [categories[0]] : []}
          renderTags={(value, getTagProps) => {
            return value.map((option, index) => {
              return (
                <Chip
                  {...getTagProps({ index })}
                  variant='outlined'
                  label={option.name}
                  size='small'
                  key={index}
                />
              );
            });
          }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                variant='filled'
                label='Categories'
                placeholder='Enter categories'
              />
            );
          }}
        />
        <Typography>Select your budget</Typography>
        <Typography>Upload your files</Typography>
        <Typography>Choose deadline</Typography>
        <Typography>Summary</Typography>
      </Grid>
    </Card>
  );
}
