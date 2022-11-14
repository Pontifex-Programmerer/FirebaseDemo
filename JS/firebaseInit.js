
// App specific content
const firebaseConfig = {
    apiKey: "AIzaSyDZ_kQVGMZwJwbZ4ZXZDZ7zWeIzTJd5ZwY",
    authDomain: "testproject-fd990.firebaseapp.com",
    projectId: "testproject-fd990",
    storageBucket: "testproject-fd990.appspot.com",
    messagingSenderId: "747712716352",
    appId: "1:747712716352:web:b59ac4edc586966df1c9a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
