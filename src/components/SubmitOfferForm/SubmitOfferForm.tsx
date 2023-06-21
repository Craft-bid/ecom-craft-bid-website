/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Autocomplete, Button, Card, Chip, Grid, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, FormEvent, useContext } from 'react';
import { CustomUploadDropzone } from '../CustomUploadDropzone/CustomUploadDropzone';
import { SubmitFormErrors } from './SubmitOfferForm.types';
import { addOffer, addPhoto, addTags, updateOffer } from '../../services/offerService';
import { AuthenticationContext } from '../AuthenticationContext/AuthenticationContext';
import { Tag } from '../../common/types/Tag.types';
import { AddOfferDTO, UpdateOfferDTO } from '../../common/types/DTOs.types';
import { getTags } from '../../services/tagService';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SubmitOfferForm() {
  const { t } = useTranslation();

  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategories, setSelectedCategories] = useState<Tag[]>([]);
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File | undefined>();
  const [description, setDescription] = useState<string>('');
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(0);
  const [categories, setCategories] = useState<Tag[]>([]);

  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({} as SubmitFormErrors);
  const navigate = useNavigate();

  useEffect(() => {
    getTags()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('AuthenticationContext is null');
  }
  const { isAuthenticated, id } = context;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation here
    const errors = {} as SubmitFormErrors;

    // Check if all required fields are filled
    if (!title.trim()) {
      errors.title = t('createOfferPage.errorTitle');
    }
    if (!description.trim()) {
      errors.description = t('createOfferPage.errorDescription');
    }
    if (selectedCategories.length === 0) {
      errors.categories = t('createOfferPage.errorCategories');
    }
    if (minBudget >= maxBudget) {
      errors.budget = t('createOfferPage.errorBudget');
    }
    if (!date) {
      throw new Error('Date is null');
    }

    // Add additional validation logic as needed
    if (!isAuthenticated) {
      throw new Error('User is not authenticated');
    }
    if (!id) {
      throw new Error('User id is null');
    }
    // Update the form errors state
    setFormErrors(errors);
    // If no errors, set form validity to true
    if (Object.keys(errors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
      return;
    }

    const offer: AddOfferDTO = {
      title: title,
      description: description,
      advertiserId: String(id),
    };

    addOffer(offer)
      .then((ret) => {
        const updatedOffer: UpdateOfferDTO = {
          expirationDate: date.toISOString(),
        };
        updateOffer(ret.id, updatedOffer)
          .then(() => {
            addTags(ret.id, selectedCategories)
              .then(() => {
                if (file) {
                  addPhoto(ret.id, file)
                    .then((ret4) => {
                      navigate(`/offer/${ret4.id}`);
                    })
                    .catch((error) => {
                      console.error(`Couldn't add photo\n${JSON.stringify(error)}`);
                    });
                }
              })
              .catch((error) => {
                console.error(`Couldn't add tags\n${JSON.stringify(error)}`);
              });
          })
          .catch((error) => {
            console.error(`Couldn't update offer\n${JSON.stringify(error)}`);
          });
      })
      .catch((error) => {
        console.error(`Couldn't add offer\n${JSON.stringify(error)}`);
      });
  };

  const formSxObj = { backgroundColor: '#F5FBFB', width: '55rem', minHeight: 1400, borderRadius: 10 };

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
            {t('createOfferPage.formTitle')}
          </Typography>
          <Typography>{t('createOfferPage.formTitlePrompt')}</Typography>
          <TextField
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            sx={{ width: '100%' }}
          ></TextField>
          <Typography>{t('createOfferPage.formDescription')}</Typography>
          <TextField
            multiline
            sx={{ width: '100%' }}
            rows={6}
            variant='outlined'
            label={t('createOfferPage.formDescription')}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></TextField>
          <Typography>{t('createOfferPage.formCategories')}</Typography>
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
                  label={t('createOfferPage.formCategoriesPrompt')}
                  placeholder={t('createOfferPage.formCategoriesPrompt')}
                />
              );
            }}
          />
          <Typography>{t('createOfferPage.formBudget')}</Typography>
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
          <Typography>{t('createOfferPage.formFiles')}</Typography>
          <CustomUploadDropzone
            value={file}
            onChange={setFile}
          />
          <Typography>{t('createOfferPage.formDeadline')}</Typography>

          <DatePicker
            label={t('createOfferPage.formDeadlinePlaceholder')}
            value={date}
            onChange={(newValue) => {
              return setDate(newValue);
            }}
          />
          <Typography
            fontSize={32}
            textAlign={'center'}
          >
            {t('createOfferPage.formSummary')}
          </Typography>
          <Typography>
            {t('createOfferPage.title')}: {title}
          </Typography>
          <Typography>
            {t('createOfferPage.description')}: {description}
          </Typography>
          <Typography>
            {t('createOfferPage.categories')}:{' '}
            {selectedCategories.map((category) => {
              return category.name;
            })}
          </Typography>
          <Typography>
            {t('createOfferPage.minBudget')}: {minBudget}
          </Typography>
          <Typography>
            {t('createOfferPage.maxBudget')}: {maxBudget}
          </Typography>
          <Typography>{t('createOfferPage.files')}:</Typography>
          <Typography>
            {t('createOfferPage.deadline')}: {String(date)}
          </Typography>

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
              <Typography>{t('createOfferPage.summary')}:</Typography>
              {/* ... display form summary data ... */}

              {/* Submit button */}
              <Button type='submit'>{t('createOfferPage.submit')}</Button>
            </div>
          )}

          {/* Render submit button if form is not valid */}
          {!isFormValid && <Button type='submit'>{t('createOfferPage.validateAndSubmit')}</Button>}
        </Grid>
      </form>
    </Card>
  );
}
