// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGh49FQmvGvWGiVCeJmLEpRg6KMcAa9o",
  authDomain: "project-eleven-f9486.firebaseapp.com",
  projectId: "project-eleven-f9486",
  storageBucket: "project-eleven-f9486.appspot.com",
  messagingSenderId: "758531850673",
  appId: "1:758531850673:web:13e0fd4fe30bbbf06e7d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default(auth);