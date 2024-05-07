// AgendaForm.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-size: 1rem;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 1rem;
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    font-size: 1rem;
    background-color: #2FD1C5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const AgendaForm = ({ onSubmit }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ task, date });
        setTask('');
        setDate('');
    };

    return (
        <FormContainer>
            <FormTitle>Add Task to Agenda</FormTitle>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="task">Task</Label>
                    <Input
                        type="text"
                        id="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit">Add Task</Button>
            </form>
        </FormContainer>
    );
};


export default AgendaForm;
