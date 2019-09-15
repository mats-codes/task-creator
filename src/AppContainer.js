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
            filterString: '',
            newlyCreatedItems: [],
        };

        this.handleSeverityChange = this.handleSeverityChange.bind(this);
        this.handleNewFilterString = this.handleNewFilterString.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
    }

    handleSeverityChange(val) {
        this.setState({
            showOnlyHighSeverity: val.target.checked
        });
    }

    handleNewFilterString(val) {
        this.setState({
            filterString: val.target.value
        });
    }

    handleNewTask(val) {
        this.setState({
            newlyCreatedItems: this.state.newlyCreatedItems.concat([val])
        });
    }

    render() {
        const allTasks = this.props.tasks.concat(this.state.newlyCreatedItems);
        const filteredTasks = allTasks.filter(
            task => 
                task.title.indexOf(this.state.filterString) !== -1 &&
                (task.severity === 'high' || !this.state.showOnlyHighSeverity)
        );
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
                            severityChangeHandler={this.handleSeverityChange}
                            filterString={this.state.filterString}
                            filterStringChangeHandler={this.handleNewFilterString}
                        />
                    </Paper>
                    <Paper className={this.props.classes.paper}>
                        <TaskTable tasks={filteredTasks}/>
                    </Paper>
                    </Grid>

                    <Grid item xs={6}>
                    <Paper className={this.props.classes.paper}>
                        <TaskCreationForm 
                            newTaskHandler={this.handleNewTask}
                        />
                    </Paper>
                    </Grid>
                </Grid>
           </div>
        )
    }
}

export default AppContainer;

