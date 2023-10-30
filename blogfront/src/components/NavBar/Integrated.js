import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import MenuButton from "./menuButton";
import Profile from "./profile";
import SignButton from "./SignButton";
import Input from "./input";

import userIcon from "./user.png"
import homepageLogoIcon from "./homepageLogo.png"
import profileIcon from "./profileIcon.png"
import homeIcon from "./whiteHomeIcon.png"
import searchIcon from "./whiteSearchIcon.png"
import { useState } from "react";

const HomepageLogo = styled.img`
    width : 7rem;
    height : 7rem;
`
const BackDiv = styled.div`
    position: sticky;
    top:0;
    background-color : #66B0FF;
    width : 7rem;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items : center;
`
const SignDiv = styled.div`
    display : flex;
    flex-direction:column;
    margin-bottom : 2rem;
`
const MenuDiv = styled.div`
    display : flex;
    flex-direction:column;
    flex-grow:1;
`
const SearchDiv = styled.div`
    position:relative;
    z-index: 10;
`

function NavBar(props) {
    const navigate = useNavigate()
    const [toggleSearch, setToggleSearch] = useState(false)
    return (
        <BackDiv>
            <HomepageLogo src={homepageLogoIcon} />
            <Profile text="USERNAME" src={userIcon} />
            <MenuDiv>
                <MenuButton text="HOME" src={homeIcon} onClick={() => navigate('/main')} />
                <MenuButton text="PROFILE" src={profileIcon} onClick={() => navigate('/individual')} />
                <SearchDiv>
                    <MenuButton text="SEARCH" src={searchIcon} onClick={(e) => { 
                            setToggleSearch(!toggleSearch) 
                        }}/>
                    {toggleSearch&&<Input/>}
                </SearchDiv>
            </MenuDiv>
            <SignDiv>
                <SignButton text="Sign In" onClick={() => navigate('/login')} />
                <SignButton text="Sign Up" onClick={() => navigate('/signup')} />
            </SignDiv>
        </BackDiv>
    )
}

export default NavBar;