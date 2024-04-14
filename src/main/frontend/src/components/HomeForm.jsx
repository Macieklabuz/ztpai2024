import React from 'react';
import styled from 'styled-components';
import agendaIcon from '../agenda-icon.png';
import todoListIcon from '../tasks-icon.png';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

const Image = styled.img`
    width: 200px;
    height: auto;
    margin: 0 20px;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Tab = styled.div`
    background-color: #2FD1C5;
    color: white;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1da7a0;
    }
`;

const HomePage = () => {
    return (
        <HomeContainer>
            <Title>TimeWise Pro</Title>
            <ImageContainer>
                <Image src={agendaIcon} alt="Agenda Icon" />
                <Image src={todoListIcon} alt="Todo List Icon" />
            </ImageContainer>
            <TabContainer>
                <Tab>Agenda</Tab>
                <Tab>To Do List</Tab>
            </TabContainer>
        </HomeContainer>
    );
};

export default HomePage;
