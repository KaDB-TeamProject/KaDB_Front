import styled from "styled-components";

import MenuButton from "./menuButton";
import Profile from "./profile";
import SignButton from "./SignButton";

const BackDiv = styled.div`
    background-color : #66B0FF;
    width : 7%;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    align-items : center;
`
const SignDiv = styled.div`
    display : flex;
    flex-direction:column;
`

const MenuDiv = styled.div`
    display : flex;
    flex-direction:column;
`

function NavBar(){
    return(
        <BackDiv>
            <img/>
            <Profile text="USERNAME"/>
            <MenuDiv>
                <MenuButton text="HOME"/>
                <MenuButton text="PROFILE"/>
                <MenuButton text="SEARCH"/>
            </MenuDiv>
            <SignDiv>
                <SignButton text="Sign In"/>
                <SignButton text="Sign Up"/>
            </SignDiv>
        </BackDiv>
    )
}

export default NavBar;