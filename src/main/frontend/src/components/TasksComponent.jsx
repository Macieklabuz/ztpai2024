import React, { useState } from 'react';
import styled from 'styled-components';
const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:700px;
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
`;

const TaskInfo = styled.div`
    display: flex;
    align-items: center;
`;

const TaskText = styled.p`
    margin: 0;
    font-size: 1rem;
    margin-right: 20px;
`;

const TaskDate = styled.span`
    font-size: 0.8rem;
    color: #888;
`;

const TaskActions = styled.div`
    display: flex;
    align-items: center;
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
`;

const Task = ({ text, date, completed, onDelete, onToggleComplete }) => {
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleDelete = () => {
        onDelete();
    };

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
        onToggleComplete();
    };

    return (
        <>
        <TaskContainer>
            <TaskInfo>
                <TaskText>{text}</TaskText>
                <TaskDate>{date}</TaskDate>
            </TaskInfo>
            <TaskActions>
                <ActionButton onClick={handleToggleComplete} completed={isCompleted}>
                    {isCompleted ? 'Undo' : 'Done'}
                </ActionButton>
                <ActionButton onClick={handleDelete}>
                    Delete
                </ActionButton>
                <ActionButton>
                    In Progress
                </ActionButton>
            </TaskActions>
        </TaskContainer>
            <TaskListContainer>
                <TaskListText>This is your task list:</TaskListText>
            </TaskListContainer>
            </>
    );
};

export default Task;
