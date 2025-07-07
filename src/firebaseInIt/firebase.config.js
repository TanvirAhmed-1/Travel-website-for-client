// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_ApiKey ,
//   authDomain:import.meta.env.VITE_AuthDomain ,
//   projectId: import.meta.env.VITE_ProjectId,
//   storageBucket: import.meta.env.VITE_StorageBucket,
//   messagingSenderId:import.meta.env.VITE_MessagingSenderId ,
//   appId: import.meta.env.VITE_AppId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;

// .....................................................

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiszhpIbqRxfNENS2tcBF4x2e2av-nyWs",
  authDomain: "travlebd-fbc2b.firebaseapp.com",
  projectId: "travlebd-fbc2b",
  storageBucket: "travlebd-fbc2b.firebasestorage.app",
  messagingSenderId: "954241376170",
  appId: "1:954241376170:web:de609600dad30c2f87d5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;