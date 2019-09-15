import React from 'react';
import HeroSelector from './HeroSelector';
import SeveritySelector from './SeveritySelector';
import TextField from '@material-ui/core/TextField';
import { Box, Typography, Button } from '@material-ui/core';

class TaskCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            description: undefined,
            favHero: 'Coding Kid',
            severity: undefined,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSeverityChange = this.handleSeverityChange.bind(this);
        this.handleFavHeroChange = this.handleFavHeroChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }


    theme = {
        spacing: 12,
    }

    addTask() {
        const newTask = {
            assignee: this.state.favHero,
            title: this.state.name,
            description: this.state.description,
            severity: this.state.severity,
        }
        this.props.newTaskHandler(newTask);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleSeverityChange(e) {
        this.setState({
            severity: e.target.value
        });
    }

    handleFavHeroChange(e) {
        this.setState({
            favHero: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Typography variant="h6">Searchbar</Typography>
                <Box mt={1} mb={1}>
                    <TextField
                        label="Taskname"
                        variant="outlined"
                        onChange={this.handleNameChange}
                        defaultValue={this.state.name}
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        multiline
                        rows="4"
                        defaultValue={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <HeroSelector 
                        changeHandler={this.handleFavHeroChange}
                        favHero={this.state.favHero}
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <SeveritySelector 
                        changeHandler={this.handleSeverityChange}
                        severity={this.state.severity}
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <Button variant="contained" color="primary" onClick={this.addTask}>
                        Add
                    </Button>
                </Box>
            </div>
        )
    }
}

export default TaskCreationForm;