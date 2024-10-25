import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

type Props = {children:React.ReactNode}

export default ({children}: Props)=>{
    //로그인 했는지 안했는지 확인
    const user = auth.currentUser;

    if(user){
        return <>{children}</>
    }
    else{
        return <Navigate to={"/signin"}/>
    }

}