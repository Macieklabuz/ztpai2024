import React from 'react';
import styled from 'styled-components';
import AddTaskForm from '../components/AddTaskForm';
import NavigationBar from "../components/NavigationBar";
import BottomBar from "../components/BottomBar";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90.5vh;
`;

const AddTaskPage = () => {
    return (
        <>
            <NavigationBar />
        <PageContainer>
            <AddTaskForm />
        </PageContainer>
            <BottomBar/>
        </>
    );
};

export default AddTaskPage;
