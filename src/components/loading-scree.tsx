//const loadingScreen = () =>{}

import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BounceAnim = keyframes`
  0%{ transform: scale(1); }  
  50%{transform: scale(1.5);}
  100%{transform: scale(1);}
`;

const Dot = styled.div`
  background-color: white;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0px 5px;
  animation: ${BounceAnim} 1s infinite ease-in-out;
  &:nth-child(1){
    animation-delay: 0s;
  }
  &:nth-child(2){
    animation-delay: 0.25s;
  }
  &:nth-child(3){
    animation-delay: 0.5;
  }
`;


export default () => {
    return(
        <Container>
            <Dot />
            <Dot />
            <Dot />
        </Container>
    )
}