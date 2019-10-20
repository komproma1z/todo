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
            this.setState({tasks: [...this.state.tasks, {name: this.state.inputValue, uuid: uuid()}], inputValue: '', });
        }
    }

    handleChange = e => {
        this.setState({inputValue: e.target.value});
    }

    handleDelete = e => {
        this.setState({tasks: this.state.tasks.filter(task => task.uuid !== e.target.parentElement.parentElement.parentElement.id)});
    }

    handleComplete = e => {
        e.target.parentElement.parentElement.parentElement.style.background = 'lightgreen';
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
                        handleComplete={this.handleComplete}
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
    'width': '300px',
    'height': '500px',
    'marginTop': '50px',
    'overflow': 'overlay',
}

export default TodoApp;
