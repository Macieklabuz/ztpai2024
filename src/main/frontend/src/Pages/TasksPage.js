import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';
import SearchBar from "../components/SearchBar";
import TaskComponent from "../components/TaskComponent";
import {deleteDataWithToken} from "../Utilities/AppUtils";

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin-right: 2%;
`;

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-right: 2%;
    max-height: 70vh;
    overflow-y: auto;
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
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
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
`;

const TaskDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 20px;
    width: 45%;
`;

const TaskImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
`;

const TaskTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const TaskDescription = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
`;

const TaskDate = styled.span`
    font-size: 1rem;
    color: #888;
    margin-bottom: 20px;
`;

const ActionButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: ${({ completed }) => (completed ? '#aaa' : '#333')};
    transition: color 0.3s;

    &:hover {
        color: ${({ completed }) => (completed ? '#aaa' : '#666')};
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Unauthorized');
                    return;
                }
                const response = await axios.get('http://localhost:8080/users/tasks/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });


                const tasksData = Array.isArray(response.data) ? response.data : [];
                setTasks(tasksData);
                setFilteredTasks(tasksData);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteDataWithToken(`http://localhost:8080/users/tasks/${taskId}`);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
            setFilteredTasks(prevTasks => prevTasks.filter(task => task.id !== taskId)); // Update filtered tasks
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
            setFilteredTasks(prevTasks =>
                prevTasks.map(t => (t.id === taskId ? updatedTask : t)) // Update filtered tasks
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

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    return (
        <>
            <NavigationBar />
            <PageContainer>
                <TaskListContainer>
                    <SearchBar placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
                    <TaskListText>This is your task list:</TaskListText>
                    <TaskList>
                    {filteredTasks.map(task => (
                        <TaskContainer key={task.id} onClick={() => handleTaskClick(task)}>
                            <TaskComponent
                                key={task.id}
                                image={task.image}
                                title={task.title}
                            />
                        </TaskContainer>
                    ))}
                    </TaskList>
                </TaskListContainer>
                {selectedTask && (
                    <TaskDetailContainer>
                        {selectedTask.image &&
                            <TaskImage src={`http://localhost:8080/uploads/tasks/${selectedTask.image}`} alt="Task" />}
                        <TaskTitle>{selectedTask.title}</TaskTitle>
                        <TaskDescription>{selectedTask.description}</TaskDescription>
                        <TaskDate>Due Date: {new Date(selectedTask.dueDate).toLocaleDateString()}</TaskDate>
                        <div>
                            <ActionButton onClick={() => handleDeleteTask(selectedTask.id)}>
                                Delete
                            </ActionButton>
                        </div>
                    </TaskDetailContainer>
                )}
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default TasksPage;
