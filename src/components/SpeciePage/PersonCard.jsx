import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { getData } from 'Api/api';
import LoadSpinner from 'Components/LoadSpinner/LoadSpinner';

const useStyles = createUseStyles((theme) => ({
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

const PersonCard = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const loadSpecies = async () => {
      try {
        setLoading(true);
        const response = await getData(url);
        setPerson(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log({ error });
      }
    };
    loadSpecies();
  }, []);

  const classes = useStyles();

  return (
    person
    && (
      <div className={classes.personCardContainer}>
        {
          !loading
            ? (
              <>
                <div className={classes.personCardName}>
                  {person.name}
                </div>
                <Link
                  to={{ pathname: `/character/${person.name}`, state: { person } }}
                >
                  get details
                </Link>
              </>
            ) : (
              <LoadSpinner />
            )
        }
      </div>
    )
  );
};

PersonCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PersonCard;
