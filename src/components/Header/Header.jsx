import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { PAGE_TITLES } from '../../consts/constants';

const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    padding: 30,
  },
  titleContainer: {

  },
  titleType: {
    marginRight: 5,
  },
}));

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const [title] = useState(location?.pathname?.split('/')[1]);
  const [name] = useState(location?.pathname?.split('/')[2]);
  console.log(location?.pathname?.split('/')[1]);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.titleType}>
          {PAGE_TITLES[title]}
          :
        </span>
        <span className={classes.titleName}>
          {name}
        </span>
      </div>
      <Link to="/">return</Link>
    </div>
  );
}
