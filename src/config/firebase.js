import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBWgassQSNKOvTFI-olF6JcEsuoRTawF-o",
  authDomain: "tiktok-jornada-aa535.firebaseapp.com",
  projectId: "tiktok-jornada-aa535",
  storageBucket: "tiktok-jornada-aa535.appspot.com",
  messagingSenderId: "289226021317",
  appId: "1:289226021317:web:03eae6d9dc38ec1047d3ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;