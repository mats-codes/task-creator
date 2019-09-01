import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';

class SeveritySelctor extends React.Component {

    render() {
        return (
            <div>
                <InputLabel>Severity:</InputLabel>
                <RadioGroup name="severity" row>
                    <FormControlLabel
                        label="High"
                        value="high"
                        control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                        label="Medium"
                        value="medium"
                        control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                        label="Low"
                        value="low"
                        control={<Radio color="primary" />}
                    />
                </RadioGroup>
            </div>
        )
    }
}

export default SeveritySelctor;

