import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  characterInfoLineText: {
    color: theme.color.facded,
  },
  characterInfoLineLabel: {
    marginRight: 10,
  },
}));

const CharacterInfoLine = ({ label, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.characterInfoLineContainer}>
      <span className={classes.characterInfoLineLabel}>
        {label}
        :
      </span>
      <span className={classes.characterInfoLineText}>
        {text}
      </span>
    </div>
  );
};

CharacterInfoLine.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CharacterInfoLine;
