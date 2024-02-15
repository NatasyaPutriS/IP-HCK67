const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0IvR1BWYeTEQWl9FJGHHHf59IS4CPEgI",
    authDomain: "cooktab-f0fa3.firebaseapp.com",
    projectId: "cooktab-f0fa3",
    storageBucket: "cooktab-f0fa3.appspot.com",
    messagingSenderId: "500894434039",
    appId: "1:500894434039:web:d739c9fc72a7e7787a49f2",
    measurementId: "G-5RC1EWVXSK",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

var admin = require("firebase-admin");

var serviceAccount = require("./accountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.databaseURL,
});

const db = admin.firestore();

const auth = getAuth();

module.exports = {
    firebase,
    admin,
    db,
    auth,
};
