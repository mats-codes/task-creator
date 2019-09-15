import React from 'react';
import SearchBar from './results/Searchbar';
import TaskTable from './results/TaskTable';
import TaskCreationForm from './creation-form/TaskCreationForm';
import { Grid, Paper, AppBar, Toolbar, Typography } from '@material-ui/core';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOnlyHighSeverity: false,
            filterString: undefined,
            newlyCreatedItems: [],
        };
    }

    render() {
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
                    <Paper className={this.props.classes.paper}>
                        <SearchBar 
                            showOnlyHighSeverity={this.state.showOnlyHighSeverity}
                            filterString={this.state.filterString}
                        />
                    </Paper>
                    <Paper className={this.props.classes.paper}>
                        <TaskTable tasks={this.props.tasks}/>
                    </Paper>
                    </Grid>

                    <Grid item xs={6}>
                    <Paper className={this.props.classes.paper}>
                        <TaskCreationForm />
                    </Paper>
                    </Grid>
                </Grid>
           </div>
        )
    }
}

export default AppContainer;

