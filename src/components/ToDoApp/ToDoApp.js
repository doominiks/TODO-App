import React, { Component } from 'react';
import './ToDoApp.css';
import Button from '../Button';
import TasksList from '../TasksList';

class ToDoApp extends Component {

    state = {
        tasks: [],
    }

    handleAddTask = () => {
        const tasks = [...this.state.tasks];
        tasks.push({
            text: `Task number ${tasks.length + 1}`,
            id: tasks.length
        })

        this.setState({
            tasks,

        })

    }

    handleRemoveTask = () => {
        const tasks = [...this.state.tasks]
        tasks.pop()

        this.setState({
            tasks,

        })
    }

    handleClearTasks = () => {
        this.setState({
            tasks: [],

        })

    }

    render() {
        const { tasks } = this.state
        return (
            <div className="container" >
                <Button click={this.handleAddTask} name={'Add'} gradient={'peach'} />
                <Button click={this.handleRemoveTask} name={'Remove'} gradient={'aqua'} />
                <Button click={this.handleClearTasks} name={'Clear'} gradient={'blue'} />
                {tasks.length > 0 ? <TasksList items={tasks} /> : null}
            </div>
        )
    }
}

export default ToDoApp;