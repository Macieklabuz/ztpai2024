// TasksPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';
import SearchBar from "../components/SearchBar";
import TaskComponent from "../components/TaskComponent";

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 700px;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90.5vh;
`;
const TaskListText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: rgba(0, 0, 0,0.1);
    border-radius: 10px;
`;

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Unauthorised');
                    return;
                }
                const response = await axios.get('http://localhost:8080/users/tasks/me',{
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

    useEffect(() => {
        const filtered = tasks.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTasks(filtered);
    }, [searchQuery, tasks]);


    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value);
    };


    return (
        <>
            <NavigationBar />
            <PageContainer>
                <SearchBar placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
                <TaskListContainer>
                <TaskListText>This is your task list:</TaskListText>
                    {filteredTasks.map(task=>(
                        <TaskComponent
                        key = {task.id}
                        image={task.image}
                        title={task.title}
                        />
                        ))}
                </TaskListContainer>
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default TasksPage;
