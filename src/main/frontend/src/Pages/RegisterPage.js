import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';
import Logo from '../logo.png';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar'

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    height: 78vh;
`;

const LogoImage = styled.img`
    width: 400px;
    height: auto;
    margin-bottom: 20px;
    margin-right: 300px;
`;

const RegisterHeader = styled.h1`
    color: black;
    font-size: 32px;
    margin-bottom: 20px;
    margin-left: 700px;
`;

const RegisterPage = () => {
    return (
        <>
            <TopBar />
            <RegisterContainer>
                <RegisterHeader>Sign up</RegisterHeader>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LogoImage src={Logo} alt="Logo" />
                    <RegisterForm />
                </div>
            </RegisterContainer>
            <BottomBar />
        </>
    );
};

export default RegisterPage;
