import firebase from 'firebase';

try {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: process.env.API_KEY, // "AIzaSyBh5SHUMtdWAY_PzKHSJ2cZwaC4Fto0swk",
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
} catch (e) {}

export const firebaseRef = firebase.database().ref();
export default firebase;
