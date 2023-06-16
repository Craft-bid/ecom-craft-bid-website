/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Autocomplete, Button, Card, Chip, Grid, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, FormEvent } from 'react';
import { Category } from '../../templates/HomePageContent/HomePageContent.types';
import { CustomUploadDropzone } from '../CustomUploadDropzone/CustomUploadDropzone';
import { SubmitFormErrors } from './SubmitOfferForm.types';

export function SubmitOfferForm() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File | undefined>();
  const [description, setDescription] = useState<string>('');
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);

  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({} as SubmitFormErrors);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation here
    const errors = {} as SubmitFormErrors;

    // Check if all required fields are filled
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    if (!description.trim()) {
      errors.description = 'Description is required';
    }
    if (selectedCategories.length === 0) {
      errors.categories = 'At least one category must be selected';
    }
    if (minBudget >= maxBudget) {
      errors.budget = 'Min budget must be less than max budget';
    }
    // Add additional validation logic as needed

    // Update the form errors state
    setFormErrors(errors);

    // If no errors, set form validity to true
    if (Object.keys(errors).length === 0) {
      setIsFormValid(true);
    }
  };

  const formSxObj = { backgroundColor: '#F5FBFB', width: '55rem', minHeight: 1400, borderRadius: 10 };
  const fetchUrl = '../src/templates/CreateOfferContent/testCategories.json';

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
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Grid
          marginTop={6}
          marginRight={2}
          marginLeft={2}
        >
          <Typography
            fontSize={48}
            textAlign={'center'}
            marginBottom={4}
          >
            Submit your offer!
          </Typography>
          <Typography>Type in title</Typography>
          <TextField
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            sx={{ width: '100%' }}
          ></TextField>
          <Typography>Description</Typography>
          <TextField
            multiline
            sx={{ width: '100%' }}
            rows={6}
            variant='outlined'
            label='Description'
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
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
          <Grid
            container
            width={'70%'}
            justifyContent='space-between'
          >
            <TextField
              label='Min'
              name='min'
              type='number'
              value={minBudget}
              onChange={(event) => {
                setMinBudget(Number(event.target.value));
              }}
            ></TextField>
            <TextField
              label='Max'
              name='max'
              type='number'
              value={maxBudget}
              onChange={(event) => {
                setMaxBudget(Number(event.target.value));
              }}
            ></TextField>
          </Grid>
          <Typography>Upload your files</Typography>
          <CustomUploadDropzone
            value={file}
            onChange={setFile}
          />
          <Typography>Choose deadline</Typography>

          <DatePicker
            label='Select Date'
            value={date}
            onChange={(newValue) => {
              return setDate(newValue);
            }}
          />
          <Typography
            fontSize={32}
            textAlign={'center'}
          >
            Summary
          </Typography>
          <Typography>Title: {title}</Typography>
          <Typography>Description: {description}</Typography>
          <Typography>
            Categories:{' '}
            {selectedCategories.map((category) => {
              return category.name;
            })}
          </Typography>
          <Typography>Min budget: {minBudget}</Typography>
          <Typography>Max budget: {maxBudget}</Typography>
          <Typography>Files:</Typography>
          <Typography>Deadline: {String(date)}</Typography>

          {/* Display form errors */}
          {Object.keys(formErrors).map((fieldName) => {
            return (
              <Typography
                key={fieldName}
                color='error'
              >
                {formErrors[fieldName as keyof SubmitFormErrors]}
              </Typography>
            );
          })}

          {/* Render form summary and submit button only if form is valid */}
          {isFormValid && (
            <div>
              {/* ... form summary ... */}
              <Typography>Summary:</Typography>
              {/* ... display form summary data ... */}

              {/* Submit button */}
              <Button type='submit'>Submit</Button>
            </div>
          )}

          {/* Render submit button if form is not valid */}
          {!isFormValid && <Button type='submit'>Validate and Submit</Button>}
        </Grid>
      </form>
    </Card>
  );
}
