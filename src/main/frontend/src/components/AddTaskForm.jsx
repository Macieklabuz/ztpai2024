import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {postDataWithToken} from "../Utilities/AppUtils";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputField = styled.input`
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
`;

const TextAreaField = styled.textarea`
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    height: 100px;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const goToTask = () => {
    window.location.href = "/tasks";
};


const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskImage, setTaskImage] = useState(null);
    const [file, setFile] = useState(null);

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const uploadResponse = await postDataWithToken("http://localhost:8080/users/upload", formData, {
                'Content-Type': 'multipart/form-data'
            });

            if (uploadResponse) {

                const taskData = {
                    title: title,
                    taskImage: uploadResponse.fileName,
                    description: description,
                    dueDate: dueDate,
                };

                const response = await postDataWithToken("http://localhost:8080/users/add", taskData);

                if (response) {
                    console.log("Task added with ID:", response);
                    goToTask()
                }
            }else{
                console.log(file)
                console.log(`siema${uploadResponse}`)
            }
        }else{
            console.log(file)
        }
    };


    return (
        <FormContainer >
            <InputField
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextAreaField
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <InputField
                type="datetime-local"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <InputField
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
            <Button onClick={handleSubmit}>Add Task</Button>
        </FormContainer>
    );
};

export default AddTaskForm;
