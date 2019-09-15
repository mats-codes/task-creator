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
            favHero: 'ck',
            severity: undefined,
        };
    }


    theme = {
        spacing: 12,
    }

    addTask() {
        console.log("I'm superheroically clicked.");
    }

    handleNameChange(e) {
        console.log(e.target.value);
    }

    handleDescriptionChange(e) {
        console.log(e.target.value)
    }

    handleSeverityChange(e) {
        console.log(e.target.value);
    }

    handleFavHeroChange(e) {
        console.log(e.target.value);
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