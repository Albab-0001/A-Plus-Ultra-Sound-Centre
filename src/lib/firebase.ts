import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADr3eNpxqmsJ5fUYlFQUD4pVUo5xUrWHo",
  authDomain: "a-plus-ultra-sound-centr-79664.firebaseapp.com",
  projectId: "a-plus-ultra-sound-centr-79664",
  storageBucket: "a-plus-ultra-sound-centr-79664.firebasestorage.app",
  messagingSenderId: "427981136922",
  appId: "1:427981136922:web:4bba09879ef460f3335da3",
  measurementId: "G-Y09TBM2EEK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);