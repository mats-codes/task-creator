import React from 'react';
import HeroSelector from './HeroSelector';
import SeveritySelector from './SeveritySelector';
import TextField from '@material-ui/core/TextField';
import { Box, Typography, Button } from '@material-ui/core';

class TaskCreationForm extends React.Component {

    theme = {
        spacing: 12,
      }

    render() {
        return (
            <div>
                <Typography variant="h6">Searchbar</Typography>
                <Box mt={1} mb={1}>
                    <TextField
                        label="Taskname"
                        variant="outlined"
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        multiline
                        rows="4"
                    />
                </Box>
                <Box mt={1} mb={1}>
                    <HeroSelector />
                </Box>
                <Box mt={1} mb={1}>
                    <SeveritySelector />
                </Box>
                <Box mt={1} mb={1}>
                    <Button variant="contained" color="primary">
                        Add
                    </Button>
                </Box>
            </div>
        )
    }
}

export default TaskCreationForm;