import React, { PureComponent } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';

const uuid = require('uuid/v1');

class TodoApp extends PureComponent {

  state = {
    inputValue: '',
    tasks: [],
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.length === 0) {
      return;
    } else {
      this.setState({tasks: [...this.state.tasks, {name: this.state.inputValue, uuid: uuid()}], inputValue: '', });
    }
  }

  handleDelete = e => {
    this.setState({tasks: this.state.tasks.filter(task => task.uuid !== e.target.parentElement.parentElement.parentElement.id)});
  }

  handleComplete = e => {
    e.target.parentElement.parentElement.parentElement.style.background = 'lightgreen';
  }

  render() {
    
    const { tasks } = this.state;

    return (
      <div style={wrapper}>
        <Paper style={paper}>
          <Typography variant="h5">TODO app</Typography>
          <form style={{margin: '10px 0'}} onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={e => this.setState({inputValue: e.target.value})}></input>
            <input type="submit" value="Add task"></input>
          </form>
          <List component="nav" aria-label="main mailbox folders" style={list}>
            {
              tasks.map((task, i) => (
                <ListItem style={listItem} key={i} id={task.uuid.toString()} >
                  {task.name}
                  <span style={{display: 'flex', cursor: 'pointer'}}>
                    <span onClick={this.handleComplete}><strong>&#10003;</strong></span>
                    <DeleteIcon onClick={this.handleDelete} style={{cursor: 'pointer'}}/>
                  </span>
                </ListItem>
              ))
            }
          </List>
        </Paper>
      </div>
    );
  }
}

const wrapper = {
  'display': 'flex',
  'justifyContent': 'center'
}

const paper = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column',
  'width': '300px',
  'height': '500px',
  'marginTop': '50px',
  'overflow': 'overlay',
}

const list = {
  'width': '100%',
}

const listItem = {
  'justifyContent': 'space-between',
}

export default TodoApp;
