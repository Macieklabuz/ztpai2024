import React, { useState } from 'react';

const useTasksLogic = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Przykładowy task 1', date: '2024-04-15', completed: false },
        { id: 2, text: 'Przykładowy task 2', date: '2024-04-16', completed: true },
        { id: 3, text: 'Przykładowy task 3', date: '2024-04-17', completed: false },
    ]);

    const [filter, setFilter] = useState('all'); // 'all', 'completed', 'inprogress'

    const handleDeleteTask = (taskId) => {

        console.log('Usuwanie tasku o ID:', taskId);

    };

    const handleToggleTaskComplete = (taskId) => {

        console.log('Zmiana stanu wykonania tasku o ID:', taskId);

    };

    const handleToggleTaskInProgress = (taskId) => {

        console.log('Task w trakcie wykonywania o ID:', taskId);

    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'inprogress') {
            return !task.completed;
        }
        return true; // 'all'
    });

    return {
        tasks,
        filteredTasks,
        filter,
        setFilter,
        handleDeleteTask,
        handleToggleTaskComplete,
        handleToggleTaskInProgress
    };
};

export default useTasksLogic;
