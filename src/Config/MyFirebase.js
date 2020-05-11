import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCSw86X_hLZeBuJ9SDDgQdUKEE1RAaGRI0",
    authDomain: "react-chatapp-e00ba.firebaseapp.com",
    databaseURL: "https://react-chatapp-e00ba.firebaseio.com",
    projectId: "react-chatapp-e00ba",
    storageBucket: "react-chatapp-e00ba.appspot.com",
    messagingSenderId: "1093000217950",
    appId: "1:1093000217950:web:e3bd3c99d1cb8ac6b17bcf"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()