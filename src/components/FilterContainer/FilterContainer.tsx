import { Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import '@fontsource/roboto';
import '@fontsource/montserrat';
import { FilterParams, FilterParamsProps } from '../../templates/OfferListContent/FilterParams.types';
import { TagDTO, getTags } from '../../services/offerService';
import { useEffect, useState } from 'react';

export function FilterContainer({ ...props }: FilterParamsProps) {
  const checkboxStyle = {
    color: 'rgba(0, 0, 0, 0.6)',
  };
  const [categories, setCategories] = useState<TagDTO[]>([]);
  useEffect(() => {
    getTags()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  interface InitVals {
    [key: string]: boolean | string | number;
  }
  const initVals: InitVals = {
    min: '',
    max: '',
    fullTime: false,
    partTime: false,
    polish: false,
    english: false,
    russian: false,
  };
  categories.forEach((category) => {
    initVals[category.name] = false;
  });
  const { filter, handleFilterChange } = props;
  return (
    <Formik
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      initialValues={initVals}
      onSubmit={(values) => {
        const tags = [];
        for (const [key, value] of Object.entries(values)) {
          if (value === true) {
            tags.push(key);
          }
        }

        const newFilter: FilterParams = {
          title: filter.title,
          advetiserSurname: filter.advetiserSurname,
          winnerName: filter.winnerName,
          tags: tags,
          priceFrom: Number(values.min),
          priceTo: Number(values.max),
          pageable: {
            pageNumber: filter.pageable.pageNumber,
            pageSize: filter.pageable.pageSize,
          },
        };
        handleFilterChange(newFilter);
      }}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <form
            onChange={(e) => {
              handleChange(e);
              handleSubmit();
            }}
          >
            <Card sx={{ width: 400, height: 850, backgroundColor: '#F5FBFB' }}>
              <Grid
                container
                justifyContent={'space-around'}
                alignContent={'left'}
                flexDirection={'column'}
                height={'100%'}
                flexWrap={'nowrap'}
                padding={2}
              >
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 36,
                    }}
                  >
                    Filter by:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Price:
                  </Typography>
                  <Grid
                    container
                    flexWrap={'nowrap'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Grid
                      item
                      mobile={3}
                    >
                      <Field
                        as={TextField}
                        label='min'
                        type='number'
                        name='min'
                      ></Field>
                    </Grid>
                    <Grid
                      item
                      mobile={1}
                    >
                      <Typography> To </Typography>
                    </Grid>
                    <Grid
                      item
                      mobile={3}
                    >
                      <Field
                        as={TextField}
                        label='max'
                        type='number'
                        name='max'
                      ></Field>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Type:
                  </Typography>
                  <FormGroup>
                    <Field
                      type='checkbox'
                      name='fullTime'
                      as={FormControlLabel}
                      control={<Checkbox />}
                      label='Full time'
                    />
                    <Field
                      type='checkbox'
                      name='partTime'
                      as={FormControlLabel}
                      control={<Checkbox />}
                      label='Part time'
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Skill required:
                  </Typography>
                  <FormGroup>
                    {categories.map((category) => {
                      return (
                        <Field
                          type='checkbox'
                          name={category.name}
                          key={category.id}
                          as={FormControlLabel}
                          control={<Checkbox />}
                          label={category.name}
                        />
                      );
                    })}
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    Languages:
                  </Typography>
                  <FormGroup>
                    <Field
                      type='checkbox'
                      name='english'
                      as={FormControlLabel}
                      control={<Checkbox />}
                      label='English'
                    />
                    <Field
                      type='checkbox'
                      name='polish'
                      as={FormControlLabel}
                      control={<Checkbox />}
                      label='Polish'
                    />
                    <Field
                      type='checkbox'
                      name='russian'
                      as={FormControlLabel}
                      control={<Checkbox />}
                      label='Russian'
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}
