// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-OyiGX7MsUDUem0DeGgCavBprcRIjze4",
  authDomain: "vite-react-demo-549a5.firebaseapp.com",
  projectId: "vite-react-demo-549a5",
  storageBucket: "vite-react-demo-549a5.appspot.com",
  messagingSenderId: "206597822216",
  appId: "1:206597822216:web:8c5653c7d346b1de297ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
