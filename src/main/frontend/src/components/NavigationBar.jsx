import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: #DBF0FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 50px;
    height: auto;
    margin-right: 20px;
`;

const NavLink = styled.a`
    color: #000;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    window.location.href = "/login";
};

const NavigationBar = () => {
    return (
        <NavBar>
            <LeftSection>
                <NavLink href="/">Home</NavLink>
            </LeftSection>
            <RightSection>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/addTask">Add Task</NavLink>
                <NavLink href="/tasks">Tasks</NavLink>
                <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
            </RightSection>
        </NavBar>
    );
};

export default NavigationBar;

