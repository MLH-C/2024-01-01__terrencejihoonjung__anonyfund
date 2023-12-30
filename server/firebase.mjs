// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR7hYvMGz9z0aJo6mO_SEYmLQokuHYbAY",
  authDomain: "anonyfund-d353f.firebaseapp.com",
  databaseURL: "https://anonyfund-d353f-default-rtdb.firebaseio.com",
  projectId: "anonyfund-d353f",
  storageBucket: "anonyfund-d353f.appspot.com",
  messagingSenderId: "280472646400",
  appId: "1:280472646400:web:11d2bcd3034c90d9e9f9e5",
  measurementId: "G-88B2D1YCSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
