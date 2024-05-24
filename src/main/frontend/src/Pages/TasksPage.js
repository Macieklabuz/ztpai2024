// TasksPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';
import TasksComponent from "../components/TasksComponent";
import TaskList from "../components/TasksComponent";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90.5vh;
`;

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Unauthorised');
                    return;
                }
                const response = await axios.get('http://localhost:8080/users/tasks',{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`/api/tasks/${taskId}`);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleToggleTaskComplete = async (taskId) => {
        try {
            const task = tasks.find(t => t.id === taskId);
            const updatedTask = { ...task, completed: !task.completed };
            await axios.put(`/api/tasks/${taskId}`, updatedTask);
            setTasks(prevTasks =>
                prevTasks.map(t => (t.id === taskId ? updatedTask : t))
            );
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    return (
        <>
            <NavigationBar />
            <PageContainer>
                <TaskList
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onToggleComplete={handleToggleTaskComplete}
                />
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default TasksPage;
