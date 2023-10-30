import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { url } from "../../App"

import InputBox from "../Login/InputBox";
import Button from "../Login/Button";

import IDIcon from "./IDIcon.png";
import passwordIcon from "./passwordIcon.png";
import logoIcon from "./logoIcon.png";
import emailIcon from "./emailIcon.png"

const PWResetLDiv = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height: 100vh;
    background-color : #09006B;
`
const Logo = styled.img`
    width : 15rem;
    height : 15rem;
    margin-bottom : 3rem;
`
async function postsignup(id, password,email,phonenum,date){
    await axios.post(url+'user/signup',{
        id : id,
        password : password,
        email : email,
        phonenumber : phonenum,
        birthday : date
    }
    )
    .then((response)=>{
        console.log('signup axios post 응답 : ' + response)
    })
    .catch((error)=>{
        console.log('signup axios post 에러 : ' + error)
        console.log(date)
    })
}
function SignUp(){
    const [id,setId] = useState('')
    const [password, setPassword] = useState('')
    const [passwordcheck, setPasswordcheck] = useState('')
    const [email, setEmail] = useState('')
    const [phonenum, setPhonenum] = useState('')
    const [date, setDate] = useState('')

    const checkpassword = (origin, check)=>{
        return !(origin===check)
    }
    return(
        <PWResetLDiv>
            <Logo src={logoIcon}/>
            <InputBox src={IDIcon} text="USER NAME" type="text" setValue={setId}/>
            <InputBox src={passwordIcon} text="PASSWORD" type="password" setValue={setPassword}/>
            <InputBox src={passwordIcon} text="CHECK PASSWORD" type="password" setValue={setPasswordcheck}/>
            {
                checkpassword(password, passwordcheck)&&<div style={{color:"red"}}>비밀번호가 맞지 않습니다.</div>
            }
            <InputBox src={emailIcon} text="E-mail" type="text" setValue={setEmail}/>
            <InputBox src={IDIcon} text="PHONE NUMBER" type="text" setValue={setPhonenum}/>
            <InputBox src={IDIcon} type="date" setValue={setDate}/>
            <InputBox src={IDIcon} text="FAVORITE PLACE(OPTION)" type=""/>
            <Button text="회원가입" onClick={()=>{postsignup(id,password,email,phonenum,date)}}/>
        </PWResetLDiv>
    )
}

export default SignUp;