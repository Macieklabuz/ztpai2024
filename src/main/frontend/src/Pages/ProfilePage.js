import NavigationBar from "../components/NavigationBar"
import UserProfile from "../components/UserProfile"
import BottomBar from "../components/BottomBar";
import styled from "styled-components";
import React from "react";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 59.7vh;
`;

function ProfilePage(){
    return (
        <>

            <NavigationBar/>
            <UserProfile/>
            <HomeContainer>
                </HomeContainer>
            <BottomBar />
        </>
    );
}


export default ProfilePage;