import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgW2dP0GLFr8hSZ9he2WoSqT2CnrpDsFQ",
    authDomain: "garagedoorinfo-9d77f.firebaseapp.com",
    databaseURL: "https://garagedoorinfo-9d77f.firebaseio.com",
    projectId: "garagedoorinfo-9d77f",
    storageBucket: "garagedoorinfo-9d77f.appspot.com",
    messagingSenderId: "612781484536"
};

firebase.initializeApp(config);

export var database = firebase.database();
export const base = firebase;
export const firebaseAuth = firebase.auth;