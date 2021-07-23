import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  characterPageContainer: {
  },
}));

export default function CharacterPage() {
  const classes = useStyles();
  return (
    <div className={classes.characterPageContainer}>
      Character
    </div>
  );
}
