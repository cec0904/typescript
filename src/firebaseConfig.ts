// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnh5RMRXcpfp7O8w6Nr7posbDkb-3ngVw",
  authDomain: "daelimx-c7314.firebaseapp.com",
  projectId: "daelimx-c7314",
  storageBucket: "daelimx-c7314.appspot.com",
  messagingSenderId: "1027303752162",
  appId: "1:1027303752162:web:a6109ae856692862ddb9bb",
  measurementId: "G-XS108SFW9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 파이어베이스 인증 정보
export const auth = getAuth(app);

// 파이어베이스 DB(firestore) 정보
export const firestore = getFirestore(app);