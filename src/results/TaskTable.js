import React from 'react';
import { List, ListSubheader, ListItemText, ListItem, Typography } from '@material-ui/core';

class TaskTable extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h6">Tasks</Typography>
                <List subheader={<li />}>
                    <ListSubheader>Coding Kid</ListSubheader>
                    <ListItem>
                        <ListItemText>Save my Cat</ListItemText>
                    </ListItem>
                    <ListSubheader>Clean Code Women</ListSubheader>
                    <ListItem>
                        <ListItemText>Fix my dirty Code</ListItemText>
                    </ListItem>
                    <ListSubheader>Bug Hunter</ListSubheader>
                </List>
            </div>
        )
    }
}

export default TaskTable;