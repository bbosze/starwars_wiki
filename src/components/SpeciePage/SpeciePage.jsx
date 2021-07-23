import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  speciePageContainer: {
  },
}));

export default function SpeciePage() {
  const classes = useStyles();
  return (
    <div className={classes.speciePageContainer}>
      Specie
    </div>
  );
}
