import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import Logo from '../logo.png';
import BottomBar from '../components/BottomBar'
import TopBar from '../components/TopBar'

const LoginContainer = styled.div`
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

const LoginHeader = styled.h1`
    color: Black;
    font-size: 32px;
    margin-bottom: 10px;
    margin-left: 690px;
`;

function LoginPage() {
    return (
        <>
        <TopBar></TopBar>
        <LoginContainer>
            <LoginHeader>Sign in</LoginHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <LogoImage src={Logo} alt="Logo" />
                <LoginForm />
            </div>
        </LoginContainer>
    <BottomBar></BottomBar>
        </>
    );
}

export default LoginPage;