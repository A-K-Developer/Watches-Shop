import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCzJNMsYcuLThyueu96GIJ7Iim98iJ5GxI",
    authDomain: "watch-shop-b2682.firebaseapp.com",
    projectId: "watch-shop-b2682",
    storageBucket: "watch-shop-b2682.appspot.com",
    messagingSenderId: "886121237214",
    appId: "1:886121237214:web:42dc7cc4d44b25b36e504f"
  };


  initializeApp(firebaseConfig)


const db = getFirestore();

const colRef = collection(db, 'Front-endText')


getDocs(colRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {


        const data = doc.data()
        console.log(data);
    })
}).catch(err => {
    console.log(err.message);
})


