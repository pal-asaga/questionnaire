import firebase from "firebase/app"
import 'firebase/compat/firestore'
import "firebase/compat/auth"

export default function Firebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyAKqXCT1Qre4hsZzX8VMxjrDy7JJo82vrg",
        authDomain: "questionnaire-9ce40.firebaseapp.com",
        projectId: "questionnaire-9ce40",
        storageBucket: "questionnaire-9ce40.appspot.com",
        messagingSenderId: "956657391795",
        appId: "1:956657391795:web:1dbde8f33d242491e078c6"
    }
    // firebase.initializeApp(firebaseConfig);

    const initializeFirebase = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        } else {
            firebase.app() // if already initialized, use that one
        }
    }
}