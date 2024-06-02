import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';


const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 50px auto;
`;

const ProfileItem = styled.div`
    margin-bottom: 15px;
    font-size: 18px;
    
`;

const Label = styled.span`
    font-weight: bold;
`;

const UserProfile = () => {

    const [user, setUser] = useState(null);
    const [userName, setName] = useState(null);
    const [userSurname, setSurname] = useState(null);
    const [userEmail, setEmail] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found in localStorage');
                    return;
                }

                const response = await axios.get("http://localhost:8080/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
                setName(response.data.userName);
                setSurname(response.data.userSurname);
                setEmail(response.data.userEmail);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <ProfileContainer>
                <ProfileItem>
                    <Label>Name:</Label> {userName}
                </ProfileItem>
                <ProfileItem>
                    <Label>Surname:</Label> {userSurname}
                </ProfileItem>
                <ProfileItem>
                    <Label>Email:</Label> {userEmail}
                </ProfileItem>
            </ProfileContainer>

        </>
    );
};

export default UserProfile;
