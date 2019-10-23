import React, { PureComponent } from 'react';

import TaskAddingField from './components/TaskAddingField';
import ListOfTasks from './components/ListOfTasks';

import Paper from '@material-ui/core/Paper';

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
            this.setState({tasks: [...this.state.tasks, {title: this.state.inputValue, id: uuid(), dateAdded: new Date()}], inputValue: ''});
        }
    }

    handleChange = e => {
        this.setState({inputValue: e.target.value});
    }

    handleDelete = taskId => {
        this.setState({tasks: [...this.state.tasks.filter(task => task.id !== taskId)]});
    }
 
    onChangeTask = task => title => {
        const oldTask = this.state.tasks.find(item => item === task);
        const newTask = {...oldTask, title};
        const tasks = [...this.state.tasks.filter(item => item !== task), newTask].sort((a, b) => a.dateAdded-b.dateAdded);
        this.setState({tasks});
      }

    render() {

        const { inputValue, tasks } = this.state;

        return (
            <div style={wrapper}>
                <Paper style={paper}>
                    <TaskAddingField
                        inputValue={inputValue}
                        tasks={tasks} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                    <ListOfTasks 
                        tasks={tasks}
                        handleDelete={this.handleDelete}
                        onChangeTask={this.onChangeTask}
                    />
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
    'minWidth': '300px',
    'maxWidth': '700px',
    'height': '500px',
    'marginTop': '50px',
    'overflow': 'overlay',
    'wordBreak': 'break-word',
}

export default TodoApp;
