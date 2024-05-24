import NavigationBar from "../components/NavigationBar"
import UserProfile from "../components/UserProfile"
import BottomBar from "../components/BottomBar";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90.5vh;
`;

function ProfilePage(){
    return (
        <>

            <NavigationBar/>
                    <UserProfile/>

        </>
    );
}


export default ProfilePage;