import styled from "styled-components";
import reset from "styled-reset";
import signup from "./screens/signup";
import { Auth } from "firebase/auth";
import { useEffect, useState } from "react";
import loadingScreen from "./loading-screen";
import protectedRouter from "./protected-router";
import layout from "../screens/layout";
import moment from "moment";

const Container = styled.div`
    border: 1px solid #353535;
    padding: 10px 15px;
`;
const Wrapper = styled.div`
    display: felx;
    gap: 5px;
    border: 1px solid #353535;
    padding: 10px 15px;
`;
const ProfileArea = styled.div`
`;
const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    background-color: tomato;
`;
const PostText = styled.div`
    font-size: 10px;
`;
const CreateTime = styled.div`
    font-size: 10px;
    color: #575757;
`;
const Footer = styled.div`
    
`;
const Item = styled.div`

`;
const ItemIcon = styled.span`
    
`;
const ItemText = styled.span`

`;

type IItem = {type: string, num: number}
type ItemIcon = "like" | "view" | "comment";
// | 하나만 써도 또는이라는 뜻

cosnt Item = ({type, num}: IITem) => {
    
    return (
    <ItemBox>
        <ItemIcon>
            <ItemIcon>100</ItemIcon>
        </ItemIcon>
    </ItemBox>
    );
};



//span은 자기영역만 div 는 영역에서 화면전체로(가로로)

//기본 프로필 이미지
const defaultProfileImg = "https://www.google.com/imgres?q=profile%20img%20icon&imgurl=https%3A%2F%2Fwww.freeiconspng.com%2Fthumbs%2Fprofile-icon-png%2Fprofile-icon-9.png&imgrefurl=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&docid=eaghkSZ2vQjCRM&tbnid=Qk95hvMUrzdm6M&vet=12ahUKEwii6tD2otuJAxUwk1YBHdb_BdcQM3oECEwQAA..i&w=320&h=320&hcb=2&ved=2ahUKEwii6tD2otuJAxUwk1YBHdb_BdcQM3oECEwQAA"



export default ({ userId, createdAt, nickname, post} : Ipost =>{
    return(
        <div>
        <Container>
            <Wrapper>
            <ProfileArea>
                <ProfileImg src={photoUrl || defaultProfileImg}/>
                {/* photoUrl 이 없을때 defaultProfileImg 보여라(삼항연산자가 더 적합할 때도 있음)
                (photoUrl ? photoUrl : defaultProfileImg}) */}
            </ProfileArea>
            <Content>
                <UserInfo>
                    <Username>{nickname}</Username>
                    {auth.currentUser && <UserEmail>{auth}</UserEmail>}
                </UserInfo>
                <PostText>{post}</PostText>
                <CreateTime>{mockComponent(createdAt).fromNow()</CreateTime>
            </Content>
            </Wrapper>
        </Container>
        <Footer>
            <Item type='like' num={83}/>
            <Item type='view' num={2383}/>
            <Item type='comment' num={12}/>
        </Footer>
        </div>
        );
    };
);
   



