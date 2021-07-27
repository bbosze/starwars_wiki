import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles((theme) => ({
  resultPageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 30,
    '@media (min-width: 600px)': {
      justifyContent: 'flex-start',
    },
  },
  personCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 120,
    margin: '0 15px 15px 0',
    border: `1px solid ${theme.color.white}`,
    borderRadius: 3,
    '& a': {
      textDecoration: 'none',
      color: theme.color.white,
      fontSize: 14,
      '&:hover': {
        color: theme.color.facded,
      },
    },
  },
  personCardName: {
    marginBottom: 10,
    color: theme.color.white,
  },
}));

const ResultPage = ({ history: { location: { state } } }) => {
  const classes = useStyles();
  return (
    <div className={classes.resultPageContainer}>
      {
        state.map((result) => (
          <div className={classes.personCardContainer} key={result.url}>
            <div className={classes.personCardName}>
              {result.name}
            </div>
            <Link
              to={{ pathname: `/character/${result.name}`, state: { person: result } }}
            >
              get details
            </Link>
          </div>
        ))
      }
    </div>
  );
};

ResultPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.arrayOf(
        PropTypes.shape({
        }),
      ),
    }),
  }).isRequired,
};

export default ResultPage;
