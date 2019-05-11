import React from 'react';
import './TasksList.css';

const TasksList = props => {
    const { items } = props
    const tasks = items.map(item =>
        <li key={item.id}>
            {item.text}
        </li>)
    return (
        <ul>
            {tasks}
        </ul>
    );
}

export default TasksList;