// TasksPage.js

import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import TaskContainer from '../components/TasksComponent';
import BottomBar from '../components/BottomBar';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90.5vh;
`;

const TasksPage = () => {
    // Przykładowe zadania
    const tasks = [
        { id: 1, text: 'Przykładowy task 1', date: '2024-04-15', completed: false },
        { id: 2, text: 'Przykładowy task 2', date: '2024-04-16', completed: true },
        { id: 3, text: 'Przykładowy task 3', date: '2024-04-17', completed: false },
    ];

    const handleDeleteTask = (taskId) => {
        // Logika usuwania tasku
        console.log('Usuwanie tasku o ID:', taskId);
    };

    const handleToggleTaskComplete = (taskId) => {
        // Logika zmiany stanu wykonania tasku
        console.log('Zmiana stanu wykonania tasku o ID:', taskId);
    };

    return (
        <>
            <NavigationBar />
            <PageContainer>
                <TaskContainer
                    tasks={tasks}
                    onDeleteTask={handleDeleteTask}
                    onToggleTaskComplete={handleToggleTaskComplete}
                />
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default TasksPage;
