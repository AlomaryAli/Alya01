import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4rHf45-bnurhp-A5gEmcPzIPC7r-zVCM",
  authDomain: "alya-1.firebaseapp.com",
  projectId: "alya-1",
  storageBucket: "alya-1.firebasestorage.app",
  messagingSenderId: "287920815018",
  appId: "1:287920815018:web:f27cd8d85e020c4d2fc9d3",
  measurementId: "G-TGP8P9E9YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only on client side)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
