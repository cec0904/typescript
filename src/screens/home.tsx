// home page를 구성
import styled from "styled-components"
import { auth } from "../firebaseConfig";

const Container = styled.div``;
const Title = styled.h1``;




export default ()=>{

    const signOut = async() => {
        await auth.signOut()
    }


    return <Container>
        <Title>Home Page.</Title>
        <button onClick={signOut}>로그아웃</button>
    </Container>
}