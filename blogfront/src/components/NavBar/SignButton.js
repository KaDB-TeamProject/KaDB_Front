import styled from "styled-components"

const SB = styled.button`
    background-color : white;
    color : black;
    border : none;
    border-radius : 10px;
    width : 3rem;
    font-size : 0.4rem;
    padding : 0.3rem;
    margin-top : 1rem;
    margin-botton : 1rem;
`

function SignButton(props){
    return(
        <>
            <SB>{props.text}</SB>
        </>
    )
}

export default SignButton;