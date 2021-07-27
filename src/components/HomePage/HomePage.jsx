import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import LoadSpinner from 'Components/LoadSpinner/LoadSpinner';
import SearchBar from 'Components/SearchBar/SearchBar';
import useLoadData from './useLoadData';

const useStyles = createUseStyles((theme) => ({
  homePageContainer: {
    padding: 15,
    overflow: 'scroll',
  },
  speciesList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  specieItem: {
    fontSize: 15,
    cursor: 'pointer',
    margin: 15,
    '& a': {
      textDecoration: 'none',
      color: theme.color.white,
      '&:hover': {
        color: theme.color.facded,
      },
    },
  },
  speciesTitle: {
    padding: 15,
    fontSize: 18,
    textTransform: 'uppercase',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { isLoading, species } = useLoadData();

  return (
    <div className={classes.homePageContainer}>
      <SearchBar />
      <div className={classes.speciesTitle}>
        list of species
      </div>
      <div className={classes.speciesList}>
        {
          !!species.length
          && (
            species.map((specie) => (
              <div
                className={classes.specieItem}
                key={specie.name}
              >
                <Link
                  to={{ pathname: `/specie/${specie.name}`, state: { specie } }}
                >
                  {specie.name}
                </Link>
              </div>
            ))
          )
        }
        {
          isLoading
          && (
            <LoadSpinner />
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
