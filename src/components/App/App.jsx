import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  app: {
    height: '100%',
    background: theme.color.nero,
    color: theme.color.white,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      Never tell me the odds.
    </div>
  );
}

export default App;
