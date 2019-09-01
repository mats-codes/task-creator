import React from 'react';
import { TextField, Checkbox, FormControlLabel, Typography } from '@material-ui/core';

class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h6">Searchbar</Typography>
                <TextField
                    label="Taskname"
                    variant="outlined"
                />
                <br/>
                <FormControlLabel
                    control={
                        <Checkbox value="onlyHighSev" />
                    }
                    label="Only High Severity"
                />
            </div>
        )
    }
}

export default SearchBar;