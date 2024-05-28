import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90.5vh;
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
    width: 80%;
`;

const TaskImage = styled.img`
    width: 150px;
    height: 150px;
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

const TaskDetailPage = ({ task }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`/api/tasks/${task.id}`);
            // Redirect or show a message that the task was deleted
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleToggleTaskComplete = async () => {
        try {
            const updatedTask = { ...task, completed: !isCompleted };
            await axios.put(`/api/tasks/${task.id}`, updatedTask);
            setIsCompleted(!isCompleted);
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    return (
        <>
            <NavigationBar />
            <PageContainer>
                <TaskDetailContainer>
                    {task.image && <TaskImage src={task.image} alt="Task" />}
                    <TaskTitle>{task.title}</TaskTitle>
                    <TaskDescription>{task.description}</TaskDescription>
                    <TaskDate>Due Date: {new Date(task.dueDate).toLocaleDateString()}</TaskDate>
                    <div>
                        <ActionButton onClick={handleToggleTaskComplete} completed={isCompleted}>
                            {isCompleted ? 'Undo' : 'Done'}
                        </ActionButton>
                        <ActionButton onClick={handleDeleteTask}>
                            Delete
                        </ActionButton>
                        <ActionButton>
                            In Progress
                        </ActionButton>
                    </div>
                </TaskDetailContainer>
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default TaskDetailPage;
