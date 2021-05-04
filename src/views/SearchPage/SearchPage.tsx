import React, { useState } from 'react';

import classes from './SearchPage.module.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export interface SearchPageProps {}

const handleSearchCity = (city: string, e: any) => {
  e.preventDefault();
  console.log(city);
};

const SearchPage: React.FC<SearchPageProps> = () => {
  const [city, setCity] = useState('');

  const handleChangeCity = (event: any) => setCity(event.target.value);

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        // eslint-disable-next-line no-restricted-globals
        onSubmit={() => handleSearchCity(city, event)}
      >
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
      </form>
    </>
  );
};

export default SearchPage;
