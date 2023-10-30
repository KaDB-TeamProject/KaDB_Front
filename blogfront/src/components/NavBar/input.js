import styled from "styled-components"

const InputDiv = styled.div`
    position: absolute;
    width: 15rem;
    height: 3rem;
    background-color: white;
    left : 3.5rem;
    top : 2rem;
    border-radius: 30px;
    border: 1px solid black;
    &::after{
        border-color: white transparent;
        border-style: solid;
        border-width: 0 6px 8px 6px;
        content: '';
        display: block;
        left:0;
        position: absolute;
        top:0;
        z-index: 10;
    }
    &::before{
        border-color : gray transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        left: 0;
        position: absolute;
        top:-2px;
        width: 0;
        z-index: 9;
    }
`
const InputInput = styled.input`
    position: absolute;
    left : 15%;
    outline: none;
`

function Input (){
    return(
        <InputDiv>
            <InputInput/>
        </InputDiv>
    )
}

export default Input;