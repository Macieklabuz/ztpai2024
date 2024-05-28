import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const TaskImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
`;

const TaskTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const TaskComponent = ({ image, title, onClick }) => {
    return (
        <TaskContainer onClick={onClick}>
            <TaskImage src={image} alt="Task" />
            <TaskTitle>{title}</TaskTitle>
        </TaskContainer>
    );
};

export default TaskComponent;
