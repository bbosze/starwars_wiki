import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import PersonCard from './PersonCard';

const useStyles = createUseStyles({
  speciePageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 30,
    '@media (min-width: 600px)': {
      justifyContent: 'flex-start',
    },
  },
});

const SpeciePage = ({ history: { location: { state: { specie: { people } } } } }) => {
  const classes = useStyles();
  return (
    <div className={classes.speciePageContainer}>
      {
        people
        && (
          people.map((person) => (
            <PersonCard key={person} url={person} />
          ))
        )
      }
    </div>
  );
};

SpeciePage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        specie: PropTypes.shape({
          people: PropTypes.arrayOf(
            PropTypes.string,
          ),
        }),
      }),
    }),
  }),
};

SpeciePage.defaultProps = {
  history: {
    location: {
      state: {
        specie: {
          people: [],
        },
      },
    },
  },
};

export default SpeciePage;
