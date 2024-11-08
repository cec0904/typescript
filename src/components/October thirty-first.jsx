import { addDoc, collection, getDocs, orderBy } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { useEffect } from "react";


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



const fetchPosts = async() => {
    //1. Firebase에 필요한 게시글 받아오기 쿼리(Query)
    const path = collection(firestore,"posts");
    const condition = orderBy("createdAt", 'desc');
    const postsQuery = query(path,condtion);
    //2. 쿼리에 맞는 Doc'들' 가져오기
    const snapshot = await getDocs(postsQuery);
    //3. 가져온 Doc들 Timeline에 쓸 수 있도록 가공(=형태)
    const timelinePosts = snapshot.docs.map((doc)=>{
        //3-1. doc 안에서 필요한 데이터를 뽑아온다.
        const {post, userId, nickname, createdAt }
            = doc.data() as IPost;
        //3-2. 뽑아온 데이터를 반환한다.(객체형태로)
        return{
            post : post,
            userId : userId,
            nickname : nickname,
            createdAt : createdAt,
            id : doc.id
        }
        // key 와 value 같으면 생략해도 이해함
        //ex) post,
        //    userId,
        //    nickname ...
    });
    //4. 가공된 데이터를 State 저장
    setPosts(timelinePosts);
}


//Page Design Rendering

return (
    <Container>
        {posts.map((post) => {
            return(
                <div>
                    <h1>{post.post}</h1>
                </div>
            );
        })}
    </Container>
);

//접속할 때 마다, Timeline이 보여질 때마다
useEffect(() => {

})




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
