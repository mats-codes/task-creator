import React from 'react';
import SearchBar from './search/Searchbar';
import TaskTable from './results/TaskTable';
import TaskCreationForm from './creation-form/TaskCreationForm';
import { Grid, Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    <div>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Coding-Valley Task
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <SearchBar />
          </Paper>
          <Paper className={classes.paper}>
            <TaskTable />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TaskCreationForm />
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}

// Exporting the Function-Component, so that it can be used in index.js
export default App;
