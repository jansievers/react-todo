import firebase from 'firebase';

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

const firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Jan',
        age: 41
    },
    todos: {}
});

const notesRef = firebaseRef.child('todos');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.push({
    text: 'Walk the dog!',
});
notesRef.push({
    text: 'Gym!',
});
