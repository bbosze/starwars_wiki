import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getData } from 'Api/api';
import { useHistory } from 'react-router-dom';
import { changeKeysToCamelCase } from 'Utils/utils';
import { useAlert } from 'react-alert';

const useStyles = createUseStyles((theme) => ({
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
  },
  searchLabel: {
    marginRight: 10,
    color: theme.color.facded,
  },
  searchInput: {
    width: 200,
    borderRadius: 6,
    background: 'none',
    marginRight: 10,
    padding: 5,
    color: theme.color.white,
    border: `1px solid ${theme.color.white}`,
    '&:focus': {
      border: `1px solid ${theme.color.facded}`,
      outline: 'none',
    },
  },
  searchButton: {
    cursor: 'pointer',
  },
}));

const SearchBar = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const alert = useAlert();

  const handleSubmit = () => {
    if (searchValue?.length < 3) {
      alert.show('min 3 characters');
      return;
    }
    const loadData = async () => {
      try {
        const response = await getData(`https://swapi.dev/api/people?search=${searchValue}`);
        if (response.results?.length) {
          const camelizedResponse = response.results.map((result) => changeKeysToCamelCase(result));
          history.push({
            pathname: `/result/search=${searchValue}`,
            state: camelizedResponse,
          });
        } else {
          alert.show('no result');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    loadData();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchLabel}>
        Search character by name:
      </div>
      <input
        className={classes.searchInput}
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div
        className={classes.searchButton}
        role="button"
        tabIndex={0}
        onClick={handleSubmit}
      >
        Search
      </div>
    </div>
  );
};

export default SearchBar;
