import * as React from 'react';

import classes from './SearchPage.module.scss';

import TextField from '@material-ui/core/TextField';
export interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id='outlined-basic' label='City' variant='outlined' />
      </form>
    </>
  );
};

export default SearchPage;
