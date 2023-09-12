import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9xYVyRjD5DVYPi0m4nY3QUH7FJvW-8gU",
  authDomain: "admin-school-app-v1.firebaseapp.com",
  projectId: "admin-school-app-v1",
  storageBucket: "admin-school-app-v1.appspot.com",
  messagingSenderId: "1055716210370",
  appId: "1:1055716210370:web:4f3bfc8f66aaa536bfed5b",
  measurementId: "G-B916T00ZBL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);