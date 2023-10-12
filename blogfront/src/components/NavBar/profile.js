import styled from "styled-components";

const Div = styled.div`
    text-align : center;
    color : white;
    font-size : 0.7rem;
`

function Profile(props){
    return(
        <Div>
            <img src={props.src}/>
            <p>{props.text}</p>
        </Div>
    )
}
export default Profile;