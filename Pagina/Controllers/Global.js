import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider    
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBPLAeGZt8TYBtAYHmDfeVNmeFwB61BFv0",
  authDomain: "paginaweb2-604e3.firebaseapp.com",
  projectId: "paginaweb2-604e3",
  storageBucket: "paginaweb2-604e3.appspot.com",
  messagingSenderId: "929541821568",
  appId: "1:929541821568:web:21aa121de31c920cc88265",
  measurementId: "G-NSHQ9JYNHC"
};

const provider = new GoogleAuthProvider(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout=()=>signOut(auth)

export const UserRegister = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const everification=()=>  
  sendEmailVerification(auth.currentUser)

export const resetPassword=()=>
  sendPasswordResetEmail(auth, email)

export function observador(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href = "../Index.html"
    }
  });
}

