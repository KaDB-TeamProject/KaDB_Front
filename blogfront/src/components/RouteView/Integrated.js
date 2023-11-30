import React from "react";
import styled from "styled-components";
import Header from "./Header";
import RouteBox from "./RouteBox";

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
  background-color: #ffffff;
  border-radius: 10px;
`;

const PostBox = styled.div`
  margin-top: 30px;
  background-color: #f2f2f2;
  margin-left: 20px;
  margin: 20px 20px;
  border-radius: 10px;
  padding: 10px 20px;
`;

function RouteView() {
  return (
    <Container>
      <Header />
      <Posts>
        <PostBox>
          <RouteBox />
        </PostBox>
      </Posts>
    </Container>
  );
}

export default RouteView;
