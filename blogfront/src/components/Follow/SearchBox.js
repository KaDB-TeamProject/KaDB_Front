import styled from 'styled-components'
import img1 from './Source/search.png';
import img2 from './Source/close.png';
import SearchBar from './SearchBar';
import { useState } from 'react';

const SearchContainer = styled.div`
    height: 10vh;
    width: 34vw;
    border-radius: 10px;
    align-items: center;
    display: flex;
    background-color: white;
`;

const Img = styled.img`
    height: 2vh;
    margin-left: 10px;
    margin-right: 20px;
`;

const Img2 = styled.img`
    height: 1.5vh;
    margin-left: 10px;
    margin-right: 20px;
    cursor: pointer;
`;


function SearchBox(props) {

    const [search, setSearch] = useState('');

    const handleClearSearch = () => {
        setSearch("");
        props.onClear();

    };

    const handleSearchChange = (val) => {

        setSearch(val)
        props.onChange(val)
        

    }

    return (

        <SearchContainer>
            <Img src={img1} />
            <SearchBar value={search} onChange={handleSearchChange} />
            <Img2 src={img2} onClick={handleClearSearch} />
        </SearchContainer>

    )

}

export default SearchBox;