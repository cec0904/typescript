import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebaseConfig";


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
    
    
    
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    try{
        const user = auth.currentUser;
        if(user == null || post == ""){
            return;
        }
        //----- Loading 시작 -----
        //2. Firebase에 특정 위치에 제출
        const myPost = {
            nickname : user.displayName,
            useId : user.id,
            createdAt : Date.now(),
            post : post,
            photo : file
        };
    };
};
    //0. firebase의 Setting
    //1. 제출 정보(text, photo, user)
    const user = auth.currentUser;
    
   
    //ㄴ user의 Nickname
    user.displayName
    //ㄴ user의 id값
    user.id
    //ㄴ 포스트 작성(생성) 시간
    Date.now()
    //ㄴ 작성한 Text
    post
    //ㄴ 첨부한 Photo
  
    }
    // ----- firestore DB 에 myPost 업로드 -----
    const path = collection(firestore, "posts");
    addDoc(path, myPost);
    // ----- Error 예외처리 -----
    // ----- Loading 종료 -----
    //ㄴ

    



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
