import React from 'react';
import { List, ListSubheader, ListItemText, ListItem, Typography } from '@material-ui/core';

class TaskTable extends React.Component {

    render() {
        // Get all unique heroes to display the tasks grouped by hero
        const heroes = Array.from(new Set(this.props.tasks.map(task => task.assignee)));
        return (
            <div>
                <Typography variant="h6">Tasks</Typography>
                <List subheader={<li />}>
                    {
                        // we use the curly braces to add JS-code
                        heroes.map(hero => {

                            // filter all tasks for each given hero
                            const filteredTasks = 
                                this.props.tasks.filter(task => task.assignee === hero);
                            
                            // create the sub header
                            const subheader = <ListSubheader key={hero}>{hero}</ListSubheader>;

                            // transform tasks into react elements
                            const listItems = filteredTasks.map(task => {
                                return (
                                    <ListItem key={task.title}>
                                        <ListItemText>{task.title}</ListItemText>
                                    </ListItem>
                                );
                            });

                            // return subheaders with listItems
                            return [subheader, listItems];
                        })
                    }
                </List>
            </div>
        )
    }
}

export default TaskTable;