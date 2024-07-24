import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtkX4Xli1VBzKhqAY8ILpd3UskVJ2APSM",
  authDomain: "cvgenerator-fda00.firebaseapp.com",
  projectId: "cvgenerator-fda00",
  storageBucket: "cvgenerator-fda00.appspot.com",
  messagingSenderId: "115325706739",
  appId: "1:115325706739:web:2fbf85fa82c632f7b3f286",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

