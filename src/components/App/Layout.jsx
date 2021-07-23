import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  layout: {
    height: '100%',
    background: theme.color.nero,
    color: theme.color.white,
    fontFamily: 'Coustard',
    fontSize: 16,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Header />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
