import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBeldpy-lAPSFcBH9whoNaHPWM_1HnWy2w",
  authDomain: "totonou-project.firebaseapp.com",
  projectId: "totonou-project",
  storageBucket: "totonou-project.appspot.com",
  messagingSenderId: "42099272626",
  appId: "1:42099272626:web:f8b084d5a9555c96ca52ab"
};

let firebaseApp;

const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getFirestore()

export { db }