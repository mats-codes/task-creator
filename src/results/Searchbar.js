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
                    defaultValue={this.props.filterString}
                    onChange={this.props.filterStringChangeHandler}
                />
                <br/>
                <FormControlLabel
                    control={
                        <Checkbox 
                            value="onlyHighSev"
                            checked={this.props.showOnlyHighSeverity}
                            onChange={this.props.severityChangeHandler}
                        />
                    }
                    label="Only High Severity"
                />
            </div>
        )
    }
}

export default SearchBar;

