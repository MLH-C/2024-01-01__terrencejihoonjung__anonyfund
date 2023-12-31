import admin from "firebase-admin";

// Replace with the path to your Firebase admin SDK JSON file

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.FIREBASE_CREDENTIALS)
  ),
  databaseURL: "https://anonyfund-d353f-default-rtdb.firebaseio.com",
});

const db = admin.database();

export default db;
