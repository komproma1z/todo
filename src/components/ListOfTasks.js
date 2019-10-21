import React, { PureComponent } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class ListOfTasks extends PureComponent {
    render() {

        const { tasks, handleComplete, handleDelete, handleEdit } = this.props;

        return (
            <List component="nav" aria-label="main mailbox folders" style={list}>
            {
                tasks.map((task, i) => (
                <ListItem style={listItem} key={i} id={task.uuid} >
                    <span style={{padding: "2px"}}>{task.title}</span>
                    <span style={{display: 'flex', cursor: 'pointer'}}>
                        <span onClick={handleComplete} style={icon}><strong>&#10003;</strong></span>
                        <span onClick={handleEdit} style={icon}>&#9998;</span>
                        <span onClick={handleDelete} style={icon}><strong>&#10539;</strong></span>
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

const icon = {
    'marginLeft': '10px',
    'userSelect': 'none',
}

export default ListOfTasks;
