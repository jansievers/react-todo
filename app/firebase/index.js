import firebase from 'firebase';

try {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBh5SHUMtdWAY_PzKHSJ2cZwaC4Fto0swk",
        authDomain: "angular-tutorial-8a968.firebaseapp.com",
        databaseURL: "https://angular-tutorial-8a968.firebaseio.com",
        projectId: "angular-tutorial-8a968",
        storageBucket: "angular-tutorial-8a968.appspot.com",
        messagingSenderId: "327932558336",
        appId: "1:327932558336:web:fa89feafa4d9a6317a2ce5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
} catch (e) {}

export const firebaseRef = firebase.database().ref();
export default firebase;
