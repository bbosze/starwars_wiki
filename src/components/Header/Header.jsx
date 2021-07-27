import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { PAGE_TITLES } from '../../consts/constants';
import { ReactComponent as Logo } from '../../img/logo.svg';

const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 50,
    padding: 30,
    background: theme.color.nero,
    borderBottom: `1px solid ${theme.color.white}`,
    '@media (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  logoContainer: {
    marginBottom: 10,
    '& svg': {
      width: 100,
      height: 'auto',
      fill: theme.color.facded,
    },
    '@media (min-width: 600px)': {
      marginBottom: 0,
    },
  },
  titleContainer: {
    marginBottom: 10,
    '@media (min-width: 600px)': {
      marginBottom: 0,
    },
  },
  titleType: {
    marginRight: 10,
  },
  titleName: {
    color: theme.color.facded,
  },
  backButton: {
    marginRight: 15,
    '& a': {
      textDecoration: 'none',
      color: theme.color.white,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const [title, setTitle] = useState(location?.pathname?.split('/')[1]);
  const [name, setName] = useState(location?.pathname?.split('/')[2]);

  useEffect(() => {
    setTitle(location?.pathname?.split('/')[1]);
    setName(location?.pathname?.split('/')[2]);
  }, [location]);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.titleContainer}>
        {
          title !== 'result'
          && (
            (title && name)
              ? (
                <>
                  <span className={classes.titleType}>
                    {PAGE_TITLES[title]}
                    :
                  </span>
                  <span className={classes.titleName}>
                    {name}
                  </span>
                </>
              ) : (
                'HOMEPAGE'
              )
          )
        }
      </div>
      <div className={classes.backButton}>
        {
          (title && name)
          && <Link to="/">Back to homepage</Link>
        }
      </div>
    </div>
  );
};

export default Header;
