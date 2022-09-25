import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe9I0TFfLA4-tmw37qmUzTYFlhvF3b284",
    authDomain: "react-coding-task-79bc1.firebaseapp.com",
    projectId: "react-coding-task-79bc1",
    storageBucket: "react-coding-task-79bc1.appspot.com",
    messagingSenderId: "1036322852743",
    appId: "1:1036322852743:web:c8f3213dd4fff98fbb4d22"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };