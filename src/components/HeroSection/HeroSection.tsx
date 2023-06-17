import { Box, Grid, Typography } from '@mui/material';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeroSectionProps } from './HeroSection.types';
import { useNavigate } from 'react-router-dom';

export function HeroSection(props: HeroSectionProps) {
  const { image, imageHeight, title, hasSearchBar, isMiddleVariant } = props;
  const navigate = useNavigate();
  const gridSxObj = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${imageHeight}px`,
    minHeight: `${imageHeight}px`,
    maxHeight: `${imageHeight}px`,
  };

  const textStyleObj = {
    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
    color: 'white',
    fontSize: '36px',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  };

  return (
    <Grid
      container
      sx={gridSxObj}
      mobile={12}
      tablet={12}
      desktop={12}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {isMiddleVariant ? (
        <>
          <Grid
            item
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
          >
            <Box
              width={'90%'}
              paddingLeft={10}
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <Typography style={textStyleObj}>{title}</Typography>
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            item
            width={'50%'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
          >
            <Box
              width={480}
              paddingLeft={10}
              sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <Typography style={textStyleObj}>{title}</Typography>
              {hasSearchBar && (
                <SearchBar
                  handleSearch={(param) => {
                    navigate(`/offers`);
                  }}
                />
              )}
            </Box>
          </Grid>

          <Grid
            item
            width={'50%'}
          />
        </>
      )}
    </Grid>
  );
}
