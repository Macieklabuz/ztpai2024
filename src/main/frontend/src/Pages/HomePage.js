import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import BottomBar from '../components/BottomBar';
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90.5vh;
    
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 70px;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    @media(max-width: 700px){
        flex-direction: column;
    }
`;

const LogoContainer = styled.div`
    margin-right: 100px; 
    @media(max-width: 700px){
        margin-right: 0;
    }
`;

const LogoImage = styled.img`
    width: 350px; 
    height: auto;
    @media(max-width: 700px){
        width: 200px;
    }
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
    cursor: pointer;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const goToTask = () => {
    window.location.href = "/tasks";
};
const goToAddTask = () => {
    window.location.href = "/addTask";
};

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <HomeContainer>
                <Title>TimeWise Pro</Title>
                <ContentContainer>
                    <LogoContainer>
                        <LogoImage src={logo} alt="Logo" />
                    </LogoContainer>
                    <TabContainer>
                        <Button onClick={goToAddTask}>Add Task </Button>
                        <Button onClick={goToTask}>Tasks </Button>
                    </TabContainer>
                </ContentContainer>
            </HomeContainer>
            <BottomBar />
        </>
    );
};

export default HomePage;
