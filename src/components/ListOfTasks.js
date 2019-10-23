import React, { PureComponent } from 'react';

import EditableField from './EditableField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class ListOfTasks extends PureComponent {
    render() {

        const { tasks, handleDelete, onChangeTask } = this.props;

        return (
            <List component="nav" aria-label="main mailbox folders" style={list}>
            {
                tasks.map((task, i) => (
                <ListItem key={i} id={task.id} >
                    <EditableField onChangeText={onChangeTask(task)} title={task.title} key={task.id} />
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
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

export default ListOfTasks;
