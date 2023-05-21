/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Autocomplete, Card, Chip, Grid, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect } from 'react';
import { Category } from '../../templates/HomePageContent/HomePageContent.types';
import { CustomUploadDropzone } from '../CustomUploadDropzone/CustomUploadDropzone';

export function SubmitOfferForm() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
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
        <TextField sx={{ width: '100%' }}></TextField>
        <Typography>Description</Typography>
        <TextField
          multiline
          sx={{ width: '100%' }}
          rows={6}
          variant='outlined'
          label='Description'
        ></TextField>
        <Typography>Choose categories</Typography>
        <Autocomplete
          multiple
          id='size-small-filled-multi'
          size='small'
          options={categories.length > 0 ? categories : []}
          getOptionLabel={(option) => {
            return option.name;
          }}
          value={selectedCategories}
          onChange={(event, newValue) => {
            setSelectedCategories(newValue);
          }}
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
        <TextField
          label='Min'
          name='min'
          type='number'
        ></TextField>
        <TextField
          label='Max'
          name='max'
          type='number'
        ></TextField>
        <Typography>Upload your files</Typography>
        <CustomUploadDropzone />
        <Typography>Choose deadline</Typography>

        <DatePicker
          label='Select Date'
          value={date}
          onChange={(newValue) => {
            return setDate(newValue);
          }}
        />
        <Typography>Summary</Typography>
      </Grid>
    </Card>
  );
}
