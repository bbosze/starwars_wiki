import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Header from 'Components/Header/Header';

const useStyles = createUseStyles((theme) => ({
  layout: {
    height: '100%',
    background: theme.color.nero,
    color: theme.color.white,
    fontFamily: 'Coustard',
    fontSize: 16,
  },
  content: {
    minHeght: '100%',
    background: theme.color.nero,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
