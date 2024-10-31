

const TextArea = styled.div`
color : white;
width: 100%
`;
const BottomMenu = styled.div`
    display: flex;

`;
const AttachPhotoButton = styled.label`
    padding: 5px 20px;
    background-color: #1379ff;
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
`;
const AttachPhotoInput = styled.input`
    display:none;
`;
const SubmitButton = styled.input`
    padding: 5px 20px;
    border-radius: 20px;
    border: none;
    background-color: #1379ff;
    color: white;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    &:hover,
    ::after {
        opacity: 0.8;
    }

`;

export default () => {
    // Page Logic Process
    // 내가 쓴 게시글 내용 Text
    const [post, setPost] = useState<string>("")
    // 내가 업로드한 이미지 File
    const [file, setFile] = useState<File>("")


    //1. 작성한 게시글 텍스트 State에 저장
    const onChange = (e) => {};
    //2. 업로드한 이미지를 State에 저장
    const onChangeFile = () => {};
    //3. Server(Firebase)에 최종 제출
    const onSubmit = () => {};
    



    //Page Design Rendering
    return(
        <Form>
        <ProfileArea></ProfileArea>
        <PostArea>
            <TextArea onChnage={(event)=>{onChange()}} placeholder="무슨 일이 일어났나요?"></TextArea>
            <BottomMenu>
                <AttachPhotoButton htmlFor="photo">사진업로드</AttachPhotoButton>
                <AttachPhotoInput id ="photo" type="file" accept="image/*"/>
                <SubmitButton type="submit"/>
            </BottomMenu>
        </PostArea>
        </Form>
    )
}
