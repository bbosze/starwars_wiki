import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Loading } from 'Img/spinner.svg';

const useStyles = createUseStyles({
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  loadingLabel: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    fontSize: 16,
  },
});

const LoadSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <span className={classes.loadingLabel}>Loading</span>
      <Loading />
    </div>
  );
};

export default LoadSpinner;
