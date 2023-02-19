import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkKSiu40LYOzQUSwL_c4Gbi6_yiOcurg",
  authDomain: "notification-go-cbnu.firebaseapp.com",
  databaseURL: "https://notification-go-cbnu-default-rtdb.firebaseio.com",
  projectId: "notification-go-cbnu",
  storageBucket: "notification-go-cbnu.appspot.com",
  messagingSenderId: "277900700395",
  appId: "1:277900700395:web:4024434ae28df69fbf2cae",
  measurementId: "G-GFGZ0DXSJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
