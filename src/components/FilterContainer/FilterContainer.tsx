import { Card, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import '@fontsource/roboto';
import '@fontsource/montserrat';
import { FilterParams, FilterParamsProps } from '../../templates/OfferListPageContent/FilterParams.types';
import { getTags } from '../../services/tagService';
import { Tag } from '../../common/types/Tag.types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function FilterContainer({ ...props }: FilterParamsProps) {
  // const checkboxStyle = {
  //   color: 'rgba(0, 0, 0, 0.6)',
  // };
  const { t } = useTranslation();

  const [categories, setCategories] = useState<Tag[]>([]);
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
          minPrice: Number(values.min),
          maxPrice: Number(values.max),
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
                justifyContent={'flex-start'}
                alignContent={'left'}
                flexDirection={'column'}
                height={'100%'}
                flexWrap={'nowrap'}
                padding={2}
              >
                <Grid
                  item
                  marginTop={3}
                >
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: 36,
                    }}
                  >
                    {t('offerListPage.containerTitle')}:
                  </Typography>
                </Grid>
                <Grid
                  item
                  marginTop={3}
                >
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    {t('offerListPage.price')}:
                  </Typography>
                  <Grid
                    container
                    flexWrap={'nowrap'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    marginTop={3}
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
                      <Typography> - </Typography>
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
                <Grid
                  item
                  marginTop={4}
                >
                  <Typography
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 24,
                    }}
                  >
                    {t('offerListPage.tags')}:
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
              </Grid>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}
