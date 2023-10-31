import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowComponent from '../FollowComponent';
import data from './TempData';
import { updateTempData } from './TempData';
import bg from '../Source/bgimg2.png'
import HeaderBox from '../HeaderBox'
import MappingBox from '../MappingContainer';
import SearchBox from '../SearchBox';

const Container = styled.div`

    background-image: url(${bg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100vw - 7rem);
`;

const FollowerBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 65vh;
    text-align: center;
    background-color: #DCEBFF;
    border: 0;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px grey;
`;

const FollowerComponentContainer = styled.div`
    overflow-y: auto;
    height: 44vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
`;

const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
`;

function FollowingPopUp() {
    const [userData, setUserData] = useState([...data]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        const filteredData = data.filter(item => item.name.includes(search));
        setUserData(filteredData);
        
    }, [search]);

    const handleSearchChange = (searchTerm) => {
        setSearch(searchTerm);
    };

    const handleBlockUser = (updatedData) => {
        setUserData(updatedData);
        updateTempData(updatedData);
    };

    const handleClearSearch = () => {
        setSearch('');
    };

    return (
        <>
            <Container>
                <FollowerBox>
                    <MappingBox />
                    <HeaderContainer>
                        <HeaderBox text="팔로잉중인 사용자 리스트"/>
                        <SearchBox onChange={handleSearchChange} onClear={handleClearSearch} />
                    </HeaderContainer>
                    <FollowerComponentContainer>
                        <FollowComponent data={userData} colour="#23C9BF"
                            onButtonClick={handleBlockUser} text="언팔로우" />
                    </FollowerComponentContainer>
                </FollowerBox>
            </Container>
        </>
    );
}

export default FollowingPopUp;