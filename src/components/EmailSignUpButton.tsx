import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
    background-color: #35a1ff;
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;

`;
const Title = styled.p``;

const Icon = styled.img`
    width: 15px;
    height: 15px;
`

export default ()=> {
    //navigate Hook
    const navigation = useNavigate();

    //회원가입 페이지로 이동하는 함수
    const onClick = () =>{
        navigation("/signup");
    };


    return(
        <Button onClick={onClick}>
            <Icon src={`${process.env.PUBLIC_URL}/email_icon.png`}></Icon>
            <Title>이메일로 가입하기</Title>
        </Button>
    );
};

