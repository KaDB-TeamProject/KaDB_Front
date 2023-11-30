import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import RouteBox from './RouteBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 8.1rem);
  background-color: #cf6e36;
  align-items: center;
  min-height: 100vh;
`;


const Posts = styled.div`

width: 70vw;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  background-color: #FFFFFF;
  margin-left: 100px;
  margin-right: 100px;
  margin: 20px 100px;
  border-radius: 10px;
`;



  function RouteEdit() {

    const navi = useNavigate()
    return (
    <Container>
        <div>

          <Header />

          <Posts>
            <RouteBox />
          </Posts>
        </div>
    </Container>
      );
    }
    
    export default RouteEdit;

