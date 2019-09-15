import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContainer from './AppContainer';

// Just for styling
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2), marginTop: '12px', marginBottom: '12px'
  },
}));

function App(props) {
  const classes = useStyles();

  //render-method
  return (
    <AppContainer 
      classes={classes}
      tasks={props.tasks}
    />
  );
}

// Exporting the Function-Component, so that it can be used in index.js
export default App;

