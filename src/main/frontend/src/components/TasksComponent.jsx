import React, { useState } from 'react';
import styled from 'styled-components';

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 700px;
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

const TaskInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const TaskText = styled.p`
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
`;

const TaskDescription = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: #666;
`;

const TaskDate = styled.span`
    font-size: 0.8rem;
    color: #888;
`;

const TaskImage = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
`;

const TaskActions = styled.div`
    display: flex;
    align-items: center;
    margin-top: 100px;
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

const Task = ({ id, title, description, dueDate, image, completed, onDelete, onToggleComplete }) => {
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleDelete = () => {
        onDelete(id);
    };

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
        onToggleComplete(id);
    };

    return (
        <TaskContainer>
            <TaskInfo>
                <TaskText>{title}</TaskText>
                {image && <TaskImage src={image} alt="Task" />}
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
    );
};

const TaskList = ({ tasks, onDelete, onToggleComplete }) => (
    <TaskListContainer>
        <TaskListText>This is your task list:</TaskListText>
        {tasks.map(task => (
            <Task
                key={task.id}
                {...task}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
            />
        ))}
    </TaskListContainer>
);

export default TaskList;
