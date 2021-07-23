import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  homePageContainer: {
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.homePageContainer}>
      HOME
    </div>
  );
}
