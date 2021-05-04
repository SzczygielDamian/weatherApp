import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './SearchPage.module.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getCity } from '../../store/City/cityAction.';
export interface SearchPageProps {}

const handleSearchCity = (getWeatherCity: any, e: any) => {
  e.preventDefault();
  getWeatherCity();
};

const SearchPage: React.FC<SearchPageProps> = () => {
  const [city, setCity] = useState('');

  const handleChangeCity = (event: any) => setCity(event.target.value);

  const dispatch = useDispatch();

  const getWeatherCity = () => {
    return dispatch(getCity(city));
  };

  return (
    <div className={classes.container}>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        // eslint-disable-next-line no-restricted-globals
        onSubmit={() => handleSearchCity(getWeatherCity, event)}
      >
        <div className={classes.FormBox}>
          <TextField
            id='outlined-basic'
            label='lokalizacja'
            variant='outlined'
            value={city}
            onChange={handleChangeCity}
          />
          <Button
            variant='contained'
            color='primary'
            disableElevation
            type='submit'
          >
            Szukaj
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
