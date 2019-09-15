import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class HeroSelector extends React.Component {  

    render() {
        return (
            <div>
                <InputLabel htmlFor="favHero">Pick your favorite hero:</InputLabel>
                <Select
                    value={this.props.favHero}
                    inputProps={{id: 'favHero'}}
                    onChange={this.props.changeHandler}
                >
                    <MenuItem value="ck">Coding Kid</MenuItem>
                    <MenuItem value="ccw">Clean Code Women</MenuItem>
                    <MenuItem value="bh">Bug Hunter</MenuItem>
                </Select>
            </div>
        )
    }
}

export default HeroSelector;

