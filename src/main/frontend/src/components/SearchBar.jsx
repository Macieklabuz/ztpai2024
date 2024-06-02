import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    @media(max-width: 700px){
        width: 150px;
        height: 30px;
    }
    
    `;

const SearchBar = ({placeholder, value, onChange}) => {
    return (
        <SearchInput
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
    );
};

export default SearchBar;
