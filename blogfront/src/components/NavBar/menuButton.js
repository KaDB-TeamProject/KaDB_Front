import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
    text-align : center;
    font-size : 0.4rem;
    color : white;
    margin-top : 1rem;
    margin-botton : 1rem;
`
function MenuButton (props){
    return(
        <Div>
            <img src={props.src}/>
            <p>{props.text}</p>
        </Div>
    )
}
export default MenuButton;