import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAWNtctZVO1mGOYnC974GKh7rQyb9KVdxQ",
    authDomain: "react-firebase-chat-app-c514a.firebaseapp.com",
    projectId: "react-firebase-chat-app-c514a",
    storageBucket: "react-firebase-chat-app-c514a.appspot.com",
    messagingSenderId: "1062034026676",
    appId: "1:1062034026676:web:fe8ce96c65b3200f70e7e1"
  }).auth()
