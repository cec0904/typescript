import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {auth} from "../firebaseConfig";


const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
background-color: #ffffff;
color: black;
padding: 10px 20px;
border-radius: 15px;
font-weight: 600;
cursor: pointer;
`;
const Title = styled.p``;

export default ()=> {
    //navigate Hook
    const navigation = useNavigate();

    //Google 로그인 함수 (비동기형) .. with Server(Firebase)
    const onClick = async () =>{
        try {
    //회원가입 페이지로 이동하는 함수
 
    //1. provider 생성 (Google 로그인 제공자)
    const provider = new GoogleAuthProvider();
    
    //2. Firebase 에게 provider & 로그인 정보를 전달
    await signInWithPopup(auth, provider);

    //3. 로그인 성공, Home 페이지로 이동
    navigation("/signup");
}   catch (error) {
    if (error instanceof FirebaseError){
        alert(error.code)
    }
}

        }
    

    return(
        <Button onClick={onClick}>
            <Title>Google 계정으로 가입하기</Title>
        </Button>
    );
};

