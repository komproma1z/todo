import React, { PureComponent } from 'react';

import TaskAddingField from './components/TaskAddingField';
import ListOfTasks from './components/ListOfTasks';

import Paper from '@material-ui/core/Paper';

const uuid = require('uuid/v1');


class TodoApp extends PureComponent {

    state = {
        inputValue: '',
        tasks: [],
        lastEditedTaskTitle: '',
        alertCounter: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputValue.length === 0) {
            return;
        } else {
            this.setState({tasks: [...this.state.tasks, {title: this.state.inputValue, uuid: uuid()}], inputValue: '', });
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

    handleEdit = e => {

        const taskText = e.target.parentElement.previousSibling;
        const nodeId = e.target.parentElement.parentElement.id;
        this.setState({lastEditedTaskTitle: taskText.innerText});

        if (taskText.contentEditable !== 'true') {
            taskText.contentEditable = true;
            taskText.style.border = '1px solid red';
            e.target.style.color = 'red';
            if (this.state.alertCounter != 1) {
                setTimeout(() => {
                    alert("Edit task text whilst in red border, then click the Edit button again to finish.");
                    this.setState({alertCounter: 1});
                }, 100);
            }
        } else {
            taskText.contentEditable = false;
            taskText.style.border = '';
            e.target.style.color = '';
            if (taskText.innerText !== this.state.lastEditedTaskTitle) {
                const taskObject = this.state.tasks.filter(task => task.uuid === nodeId)[0];
                taskObject.title = taskText.innerText;
                this.setState({tasks: [...this.state.tasks.filter(task => task.uuid !== nodeId), taskObject]});
            }
        }
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
                        handleEdit={this.handleEdit}
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
    "wordBreak": "break-word",
}

export default TodoApp;
