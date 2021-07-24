import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { PAGE_TITLES } from '../../consts/constants';
import { ReactComponent as Logo } from '../../img/logo.svg';

const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    padding: 30,
    borderBottom: `1px solid ${theme.color.white}`,
  },
  titleContainer: {
    width: 200,
  },
  logoContainer: {
    '& svg': {
      width: 100,
      fill: theme.color.facded,
    },
  },
  titleType: {
    marginRight: 5,
  },
  backButton: {
    '& a': {
      textDecoration: 'none',
      color: theme.color.white,
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const [title, setTitle] = useState(location?.pathname?.split('/')[1]);
  const [name, setName] = useState(location?.pathname?.split('/')[2]);
  console.log(location?.pathname?.split('/')[1]);

  useEffect(() => {
    setTitle(location?.pathname?.split('/')[1]);
    setName(location?.pathname?.split('/')[2]);
  }, [location]);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.titleContainer}>
        {
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
        }
      </div>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.backButton}>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
}
