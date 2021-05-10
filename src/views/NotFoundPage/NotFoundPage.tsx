import React from 'react';

import classes from './NotFound.module.scss';

export interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={classes.container}>
      <p>Nie znaleziono lokalizacji !!!</p>
    </div>
  );
};

export default NotFoundPage;
