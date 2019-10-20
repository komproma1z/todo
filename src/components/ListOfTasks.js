import React, { PureComponent } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';


class ListOfTasks extends PureComponent {
    render() {

        const { tasks, handleComplete, handleDelete } = this.props;

        return (
            <List component="nav" aria-label="main mailbox folders" style={list}>
            {
                tasks.map((task, i) => (
                <ListItem style={listItem} key={i} id={task.uuid.toString()} >
                    {task.name}
                    <span style={{display: 'flex', cursor: 'pointer'}}>
                        <span onClick={handleComplete}><strong>&#10003;</strong></span>
                        <DeleteIcon onClick={handleDelete} style={{cursor: 'pointer'}}/>
                    </span>
                </ListItem>
                ))
            }
            </List>
        );
    }
}

const list = {
    'width': '100%',
}

const listItem = {
    'justifyContent': 'space-between',
}

export default ListOfTasks;
